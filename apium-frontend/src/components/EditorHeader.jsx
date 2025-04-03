import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CodeService from '../services/CodeService';
import { Select } from '../Index'

export default function EditorHeader({ currentCode, setOutput, setUserEmail, setOutputLoading }) {

    const userEmail = localStorage.getItem('userEmail');
    const navigate = useNavigate()
    const languages = [
        { value: "javascript", label: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { value: "python", label: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { value: "java", label: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { value: "c++", label: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { value: "c", label: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
        { value: "rust", label: "Rust", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
        { value: "go", label: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
        { value: "r", label: "R", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
        { value: "php", label: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { value: "html", label: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { value: "sql", label: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg" },
        { value: "c#", label: "C#", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" },
        { value: "swift", label: "Swift", logo: "https://www.svgrepo.com/show/452110/swift.svg" },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [runFlag, setRunFlag] = useState(false)

    const runCode = async () => {
        setRunFlag(true)
        setOutputLoading(true)
        try {
            const response = await CodeService.executeCode(currentCode)
            setOutput(response.data)
            console.log(response.data)
        } catch (error) {
            alert("failed to run the code")
        } finally {
            setRunFlag(false)
            setOutputLoading(false);
        }
    }

    const saveAllCode = async () => {
        setLoading(true);
        try {
            const response = await CodeService.updateCode(userEmail, currentCode)
            console.log(response.data)
        } catch (error) {
            alert("error in saving files")
            console.log(error)
        } finally {
            setLoading(false);
            setUserEmail()
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
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-4 h-4'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5C8 11.3284 7.32843 12 6.5 12C5.67157 12 5 11.3284 5 10.5C5 9.67157 5.67157 9 6.5 9C7.32843 9 8 9.67157 8 10.5Z" fill="white"></path> <path d="M10.5 8C11.3284 8 12 7.32843 12 6.5C12 5.67157 11.3284 5 10.5 5C9.67157 5 9 5.67157 9 6.5C9 7.32843 9.67157 8 10.5 8Z" fill="white"></path> <path d="M17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5C14 5.67157 14.6716 5 15.5 5C16.3284 5 17 5.67157 17 6.5Z" fill="white"></path> <path d="M7.5 17C8.32843 17 9 16.3284 9 15.5C9 14.6716 8.32843 14 7.5 14C6.67157 14 6 14.6716 6 15.5C6 16.3284 6.67157 17 7.5 17Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C17.9712 1 23 5.34921 23 11V11.0146C23 11.543 23.0001 12.4458 22.6825 13.4987C21.8502 16.2575 18.8203 16.9964 16.4948 16.4024C16.011 16.2788 15.5243 16.145 15.0568 16.0107C14.2512 15.7791 13.5177 16.4897 13.6661 17.2315L13.9837 18.8197L14.0983 19.5068C14.3953 21.289 13.0019 23.1015 11.0165 22.8498C7.65019 22.423 5.11981 21.1007 3.43595 19.1329C1.75722 17.171 1 14.6613 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 14.2854 3.64673 16.303 4.95555 17.8326C6.25924 19.3561 8.3 20.4894 11.2681 20.8657C11.7347 20.9249 12.2348 20.4915 12.1255 19.8356L12.0163 19.1803L11.7049 17.6237C11.2467 15.3325 13.4423 13.4657 15.6093 14.0885C16.0619 14.2186 16.529 14.3469 16.9897 14.4646C18.7757 14.9208 20.3744 14.2249 20.7677 12.921C20.997 12.161 21 11.5059 21 11C21 6.65079 17.0745 3 12 3Z" fill="white"></path> </g></svg>
                        <div className='text-white font-light'>GitHub Dark</div>
                        <input type="radio" className='mt-1 outline-none' />
                    </div>
                    <div><Select options={languages} selected={selectedLanguage} onChange={setSelectedLanguage} /></div>
                    <button
                        className="flex justify-center items-center bg-gradient-to-r from-[#090979] to-[#000cff] border border-blue-600 backdrop-blur-2xl py-0.5 rounded-lg gap-1/5 px-2"
                    >
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M1.8 1.01l-.78.41v12l.78.42 9-6v-.83l-9-6zm.22 11.48V2.36l7.6 5.07-7.6 5.06z"></path>
                            </g>
                        </svg>

                        <div className='text-white font-light'>Run Code</div>
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
