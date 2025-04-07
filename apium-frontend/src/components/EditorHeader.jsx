import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Select } from '../Index'
import { useDispatch, useSelector } from 'react-redux'
import { setCodeDetails, setRunning, setOutput, setSuccess, setError } from '../redux/codeSlice'
import CodeService from '../services/CodeService'
import store from '../redux/store'

export default function EditorHeader() {

    const languages = [
        { value: "javascript", label: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { value: "python", label: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { value: "java", label: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { value: "cpp", label: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { value: "c", label: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
        { value: "rust", label: "Rust", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
        { value: "go", label: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
        { value: "r", label: "R", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
        { value: "php", label: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { value: "html", label: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { value: "sql", label: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg" },
        { value: "csharp", label: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" },
        { value: "swift", label: "Swift", logo: "https://www.svgrepo.com/show/452110/swift.svg" },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        if (selectedLanguage) {
            const title = getDefaultTitle(selectedLanguage.value)
            const content = getDefaultContent(selectedLanguage.value)
            const language = selectedLanguage.value
            dispatch(setCodeDetails({ title, language, content }))
        }
    }, [selectedLanguage])

    const getDefaultContent = (language) => {
        language = language.toLowerCase();
        switch (language) {
            case "javascript":
                return `console.log("Hello, World!");`;

            case "python":
                return `print("Hello, World!")`;

            case "java":
                return `public class Main {  
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

            case "cpp":
                return `#include <iostream>
using namespace std;
      
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;

            case "c":
                return `#include <stdio.h>
      
int main() {
    printf("Hello, World!\\n");
    return 0;
}`;

            case "rust":
                return `fn main() {
    println!("Hello, World!");
}`;

            case "go":
                return `package main
      
import "fmt"
      
func main() {
    fmt.Println("Hello, World!")
}`;

            case "r":
                return `print("Hello, World!")`;

            case "php":
                return `<?php
    echo "Hello, World!";
?>`;

            case "html":
                return `<!DOCTYPE html>
<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <h1>Hello, World!</h1>
    </body>
</html>`;

            case "sql":
                return `-- This is a comment
SELECT 'Hello, World!' AS greeting;`;

            case "csharp":
                return `using System;
      
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`;

            case "swift":
                return `import Swift
      
print("Hello, World!")`;

            default:
                return `// No default content available for ${language}`;
        }
    };

    const getDefaultTitle = (language) => {
        language = language.toLowerCase()
        switch (language) {
            case "javascript":
                return "script.js";
            case "python":
                return "main.py";
            case "java":
                return "Main.java";
            case "c++":
                return "main.cpp";
            case "c":
                return "main.c";
            case "rust":
                return "main.rs";
            case "go":
                return "main.go";
            case "r":
                return "main.r";
            case "php":
                return "index.php";
            case "html":
                return "index.html";
            case "sql":
                return "query.sql";
            case "c#":
                return "Program.cs";
            case "swift":
                return "main.swift";
            default:
                return "main.txt"; // fallback
        }
    };

    const handleRun = async () => {
        const latestCode = store.getState().code.codeDetails;
        dispatch(setOutput(""))
        dispatch(setError(""))
        setLoader(true)
        dispatch(setRunning({ var: true }))
        try {
            if (latestCode) {
                const response = await CodeService.executeCode({ ...latestCode })
                if (response) {
                    dispatch(setOutput(response.data))
                }
            }
            dispatch(setSuccess({ var: true }))
        } catch (error) {
            dispatch(setError(error.response.data))
            dispatch(setSuccess({ var: false }))
        } finally {
            dispatch(setRunning({ var: false }))
            setLoader(false)
        }
    }




    return (
        <div className="w-full p-4">
            <div
                className="flex items-center lg:justify-between justify-center 
            bg-[#0a0a0f]/80 p-3 rounded-lg"
            >
                <div className='flex items-center gap-10'>
                    <div className='hidden lg:flex items-center gap-8 h-[3vh]'>
                        <Link to='/'>
                            <img src="codeLogoWhite.png" alt="logo" className='h-6' />
                        </Link>
                    </div>

                    <button
                        className="flex justify-center items-center gap-2 bg-gray-600/30 border border-gray-600 backdrop-blur-2xl px-3 py-0.5 rounded-md"
                        onClick={() => navigate('/snippets')}
                    >

                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 w-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z" fill="white"></path> <path d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z" fill="white"></path> <path d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z" fill="white"></path> </g></svg>

                        <div className='text-white font-light'>Snippets</div>
                    </button>
                </div>
                <div className='flex items-center justify-between gap-4'>

                    <div
                        className="flex justify-center items-center bg-gray-600/30 border border-gray-600 backdrop-blur-2xl py-0.5 rounded-md px-2 gap-1"
                    >
                        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 w-6'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke="white" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <div className='text-white font-light'>AI-Suggestion</div>
                    </div>


                    <div><Select options={languages} selected={selectedLanguage} onChange={setSelectedLanguage} /></div>


                    <button
                        className="flex justify-center items-center bg-gradient-to-r from-[#09792b] to-[#06d32b] border border-green-600 backdrop-blur-2xl py-0.5 rounded-lg px-2"
                        onClick={handleRun}
                        disabled={loader}
                    >
                        {loader ? (
                            <div className='flex justify-center items-center gap-2 duration-200'>
                                <div className='w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full'></div>
                                <div className='text-white font-light'>Running...</div>
                            </div>
                        ) : (
                            <div className='flex justify-center items-center gap-1/5'>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M1.8 1.01l-.78.41v12l.78.42 9-6v-.83l-9-6zm.22 11.48V2.36l7.6 5.07-7.6 5.06z"></path>
                                    </g>
                                </svg>
                                <div className='text-white font-light'>Run Code</div>
                            </div>
                        )
                        }
                    </button>
                    <div className='flex gap-1 justify-center items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" transform="rotate(90)" className='h-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M23 13H2v-2h21v2z"></path></g></svg>
                        </div>

                        <button
                            className='bg-orange-700 text-white rounded-full h-7 w-7'
                            onClick={() => navigate('/profile')}
                        >
                            B
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
