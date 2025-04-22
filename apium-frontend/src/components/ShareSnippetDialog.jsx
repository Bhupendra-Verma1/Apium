
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import ShareCodeService from '../services/ShareCode';
import { useSelector, useDispatch } from 'react-redux';
import { setDescription } from '../redux/codeSlice';

export default function ShareSnippetDialog({ showForm , setShowForm}) {
    const [isFocused, setIsFocused] = useState(false);
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()

    const currentCode = useSelector((state) => state.code.codeDetails)
    const description = useSelector((state) => state.code.description)

    const shareSnippet = async () => {
        setLoader(true)
        try {
            await ShareCodeService.createShareCode(currentCode, description)
            toast.success("Snippet shared successfully")
        } catch (error) {
            toast.error("Error creating snippet")
            console.log(error)
        } finally {
            setLoader(false)
            setShowForm(false);
        }
    }

    if (showForm) {
        return (
            <>
                {/* Background overlay with blur */}
                <div
                    className="absolute inset-0 bg-gray-600/10  backdrop-blur-[2px] z-10"
                ></div>

                {/* Modal */}
                <div className="absolute w-1/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#1a1c25] text-white px-4 py-2 rounded-md shadow-lg">
                    <div className="flex justify-between items-center py-2">
                        <div><h1 className="font-bold text-xl">Share Snippet</h1></div>
                        <div
                            className=" px-3 pb-1 w-7 h-7 rounded-full bg-transparent text-gray-500 flex justify-center items-center cursor-pointer text-3xl"
                            onClick={() => setShowForm(false)}
                        >
                            ⨯
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-semibold text-gray-400">Title</label>
                        <input
                            id="shareInput"
                            type="text"
                            placeholder="Enter Snippet title"
                            className={`w-full px-2 py-1 outline-none h-9 border-1 rounded-md ${isFocused ? ' border-2 border-blue-600' : 'border-gray-500'
                                }`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                        />
                    </div>
                    <div className="flex justify-end items-center py-4 gap-2">
                        <button className="w-20 h-8 bg-transparent flex justify-center items-center rounded-md text-gray-400" onClick={() => setShowForm(false)}> Cancel</button>
                        <button
                            className="w-20 h-8 bg-blue-500 flex justify-center items-center rounded-md text-white"
                            onClick={shareSnippet}
                        >
                            {loader ? (
                                <div className='w-4 h-4 bg-transparent border-3 border-white border-t-transparent rounded-full animate-spin'></div>
                            ) : ("share")}
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
