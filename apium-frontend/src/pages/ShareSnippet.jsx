import React, { useState, useEffect, useCallback } from 'react'
import { CodeCard } from '../Index'
import ShareCodeService from '../services/ShareCode'
import toast from 'react-hot-toast'

export default function ShareSnippet() {
    const [gridView, setGridView] = useState(true)
    const [flexView, setFlexView] = useState(false)
    const [shareCodes, SetShareCodes] = useState([])

    useEffect(() => {
        fetchShareCodes()
    }, [])

    const fetchShareCodes = useCallback( async () => {
        try {
            const response = await ShareCodeService.getAllShareCodes()
            if(response) {
                SetShareCodes(response.data)
            }
        } catch (error) {
            toast.error("Faild to fetch share codes")
        }
    }, [])

    const toggleView = () => {
        if (gridView) {
            setGridView(false)
            setFlexView(true)
        } else {
            setGridView(true)
            setFlexView(false)
        }
    }

    return (
        <div className='w-full flex flex-col items-center gap-10'>
            <div className='w-1/2 flex flex-col items-center mt-5 gap-4'>
                <div className='w-[37vh] flex items-center justify-center gap-2 border border-gray-700 shadow-lg rounded-md px-3 py-1'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-4 h-4'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <div className='flex items-center justify-center font-inter text-[14px]'>Community Code Library</div>
                </div>
                <div className='flex items-center justify-center'>
                    <h1 className='font-poppins-bold text-4xl'>Discover & Share Code Snippets</h1>
                </div>
                <div className='flex justify-center items-center font-inter text-gray-900'>Explore a curated collection of code snippets from the community</div>
            </div>

            <div className='w-2/3 flex flex-col gap-5'>
                <div className='w-full border border-black flex justify-between items-center rounded-lg shadow-lg'>
                    <div className="flex justify-center items-center w-10 h-7">
                        <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <input
                        type="text"
                        placeholder='Search snippets by title, language, or author...'
                        className='bg-inherit w-full text-black py-2 h-12 outline-none font-inter'
                    />
                </div>
                <div className='w-full flex'>
                    <div className='flex items-center gap-3'>
                        <div className='w-fit flex items-center gap-1 border border-black px-1.5 py-0.5 rounded-sm'>
                            <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.1716 3H5C3.89543 3 3 3.89543 3 5V11.1716C3 11.702 3.21071 12.2107 3.58579 12.5858L10.8787 19.8787C12.0503 21.0503 13.9497 21.0503 15.1213 19.8787L19.8787 15.1213C21.0503 13.9497 21.0503 12.0503 19.8787 10.8787L12.5858 3.58579C12.2107 3.21071 11.702 3 11.1716 3Z" stroke="#000000" stroke-width="0.9359999999999999" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="7.5" cy="7.5" r="1.5" fill="#000000"></circle> </g></svg>
                            <div className='font-inter'>Languages:</div>
                        </div>
                        <div className='w-fit flex items-center gap-1 border border-black px-1.5 py-0.5 rounded-sm'>
                            <div className='flex items-center'>
                                <img src="java.png" alt="" className='w-4 h-4' />
                            </div>
                            <div className='font-inter'>java</div>
                        </div>
                        <div className='w-fit flex items-center gap-1 border border-black px-1.5 py-0.5 rounded-sm'>
                            <div className='flex items-center'>
                                <img src="python.png" alt="" className='w-4 h-4' />
                            </div>
                            <div className='font-inter'>python</div>
                        </div>
                        <div className='w-fit flex items-center gap-1 border border-black px-1.5 py-0.5 rounded-sm'>
                            <div className='flex items-center'>
                                <img src="c++.png" alt="" className='w-4 h-4' />
                            </div>
                            <div className='font-inter'>c++</div>
                        </div>
                        <div className='w-fit flex items-center gap-1 border border-black px-1.5 py-0.5 rounded-sm'>
                            <div className='flex items-center'>
                                <img src="c.png" alt="" className='w-4 h-4' />
                            </div>
                            <div className='font-inter'>c</div>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center justify-end gap-2'>
                        <div className='flex items-center'>
                            {shareCodes.length} snippets found
                        </div>
                        <div className='flex items-center gap-1 border border-black px-1 py-0.5 rounded-sm'>
                            <button
                                className={`w-7 h-6 flex items-center justify-center rounded-sm
                                    ${gridView ? "bg-blue-500/60" : "hover:bg-gray-600/20"}`}
                                disabled={gridView}
                                onClick={toggleView}
                            >
                                <svg className='h-6 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 9.33333V6C20 4.89543 19.1046 4 18 4H14.6667M20 9.33333H14.6667M20 9.33333V14.6667M4 9.33333V6C4 4.89543 4.89543 4 6 4H9.33333M4 9.33333H9.33333M4 9.33333V14.6667M14.6667 9.33333H9.33333M14.6667 9.33333V4M14.6667 9.33333V14.6667M9.33333 9.33333V4M9.33333 9.33333V14.6667M20 14.6667V18C20 19.1046 19.1046 20 18 20H14.6667M20 14.6667H14.6667M4 14.6667V18C4 19.1046 4.89543 20 6 20H9.33333M4 14.6667H9.33333M14.6667 14.6667H9.33333M14.6667 14.6667V20M9.33333 14.6667V20M9.33333 4H14.6667M9.33333 20H14.6667" stroke={gridView ? "#3088fa" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                            <button
                                className={`w-7 h-6 flex items-center justify-center rounded-sm
                                ${flexView ? "bg-blue-500/60" : "hover:bg-gray-600/20"}`}
                                disabled={flexView}
                                onClick={toggleView}
                            >
                                <svg className='h-4 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.553 1.10557C11.8346 0.964809 12.1659 0.964809 12.4475 1.10557L22.4475 6.10557C22.7862 6.27496 23.0002 6.62123 23.0002 7C23.0002 7.37877 22.7862 7.72504 22.4475 7.89443L12.4475 12.8944C12.1659 13.0352 11.8346 13.0352 11.553 12.8944L1.55303 7.89443C1.21425 7.72504 1.00024 7.37877 1.00024 7C1.00024 6.62123 1.21425 6.27496 1.55303 6.10557L11.553 1.10557ZM4.23631 7L12.0002 10.882L19.7642 7L12.0002 3.11803L4.23631 7Z" fill={flexView ? "#3088fa" : "black"}></path> <path d="M1.10579 16.5528C1.35278 16.0588 1.95345 15.8586 2.44743 16.1055L12.0002 20.8819L21.553 16.1055C22.047 15.8586 22.6477 16.0588 22.8946 16.5528C23.1416 17.0467 22.9414 17.6474 22.4474 17.8944L12.4474 22.8944C12.1659 23.0352 11.8345 23.0352 11.553 22.8944L1.55301 17.8944C1.05903 17.6474 0.858803 17.0467 1.10579 16.5528Z" fill={flexView ? "#3088fa" : "black"}></path> <path d="M2.44743 11.1055C1.95345 10.8586 1.35278 11.0588 1.10579 11.5528C0.858803 12.0467 1.05903 12.6474 1.55301 12.8944L11.553 17.8944C11.8345 18.0352 12.1659 18.0352 12.4474 17.8944L22.4474 12.8944C22.9414 12.6474 23.1416 12.0467 22.8946 11.5528C22.6477 11.0588 22.047 10.8586 21.553 11.1055L12.0002 15.8819L2.44743 11.1055Z" fill={flexView ? "#3088fa" : "black"}></path> </g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-3/4 '>
                <div className={`${gridView ? "grid grid-cols-3 gap-5" : "flex flex-col gap-4"}`}>
                    {shareCodes.map((shareCode, index) => (
                        <div key={index} className={`${!gridView ? "flex justify-center" : ""} `}>
                            <CodeCard  shareCode = {shareCode} gridView = {gridView} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}