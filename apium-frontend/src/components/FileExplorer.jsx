import React from 'react'
import { useState, useEffect } from 'react';
import CodeService from '../services/CodeService';

export default function FileExplorer({ setCurrentCode }) {

    const userEmail = localStorage.getItem('userEmail');
    const [loading, setLoading] = useState(false);
    const [codes, setCodes] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);

    const [newCode, setNewCode] = useState({
        title: "",
        language: "",
        content: "",
    });

    const fetchCodes = async () => {
        try {
            const response = await CodeService.getAllCodes(userEmail)
            setCodes(response.data)
        } catch (error) {
            console.error('Error fetching codes', error);
        }
    };

    useEffect(() => {
        if (userEmail) {
            fetchCodes();
        }
    }, [userEmail]);

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await CodeService.createCode(userEmail, newCode);
            setCodes([...codes, response.data]);

            setCurrentCode(newCode);
            setNewCode({ title: '', language: '', content: '' });


            setTimeout(() => setLoading(false), 2000)
            alert("file create successfully")
        } catch (error) {
            console.error('Error creating code snippet', error);
        } finally {
            setLoading(false)
            setFormVisible(false)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewCode((prevCode) => {
            const updatedCode = { ...prevCode, [name]: value };

            if (name === 'language') {
                updatedCode.content = getDefaultContent(prevCode.title, value.toLowerCase());
            }

            return updatedCode;
        });
    };

    const getDefaultContent = (name, language) => {
        let result = "";
        switch (language) {
            case "java":
                result = `public class ${name} {\n` +
                    `\tpublic static void main(String[] args) {\n` +
                    `\t\tSystem.out.println("Hello World!");\n` +
                    `\t}\n` +
                    `}`;
                break;
            case "python":
                result = 'print("Hello world")\n';
                break;
            case "javascript":
                result = 'console.log("Hello World");\n';
                break;
            case "html":
                result = `<!DOCTYPE html>\n` +
                    `<html lang="en">\n` +
                    `<head>\n` +
                    `\t<meta charset="UTF-8">\n` +
                    `\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n` +
                    `\t<title></title>\n` +
                    `</head>\n` +
                    `<body>\n\n` +
                    `</body>\n` +
                    `</html>`;
                break;
            default:
                result = "write here....\n";
        }
        return result;
    };

    return (
        <>
            <div className='w-[15%] text-white bg-[#212529] rounded-b-lg'>
                <div className='px-2 font-serif py-1 bg-black/70 flex items-center justify-between'>
                    <div>File Explorer</div>
                    <button
                        onClick={() => setFormVisible(true)}
                        className='w-5 h-5 hover:bg-[#343a40] active:bg-[#212529] rounded-sm'
                    >
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="gray"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"></path></g></svg>
                    </button>
                </div>
                <div className='flex flex-wrap mt-2'>
                    {codes.map((file) => (
                        <div
                            className='w-full px-2 py-1 text-white hover:bg-gray-500 hover:rounded-md flex justify-between'
                            onClick={() => setCurrentCode(file)}
                        >
                            <div>{file.title}</div>
                            <button className=''
                                onClick={() =>
                                    setCodes(codes.filter((code) => code != file))
                                }

                            >
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4 w-4'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isFormVisible && (
                <div className="mt-12 fixed inset-0 flex items-center justify-center backdrop-blur-[2px] bg-black/10 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-[80vh] animate-fadeIn">

                        {/* Header with Title & Close Button */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Create New File</h3>
                            <button
                                className="w-8 h-8 flex justify-center items-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
                                onClick={() => setFormVisible(false)}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form Section */}
                        <form className="w-full" onSubmit={handleCreate}>
                            <label className="block mb-2 text-gray-700">Name:</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="eg. Main"
                                required
                                onChange={handleChange}
                            />

                            <label className="block mb-2 text-gray-700">Language:</label>
                            <input
                                type="text"
                                name="language"
                                className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="eg. Java"
                                required
                                onChange={handleChange}
                            />

                            <div className="flex justify-center mt-4 w-full">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition w-full flex justify-center gap-3"
                                >
                                    Create File
                                    {loading && (
                                        <div className="w-3 h-3 border-2 border-t-transparent rounded-full animate-spin mt-2"></div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
