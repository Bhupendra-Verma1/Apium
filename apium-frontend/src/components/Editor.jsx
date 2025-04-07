import React, { useState } from 'react'
import CodeEditor from './CodeEditor';
import { useSelector, useDispatch } from 'react-redux';
import { setCodeDetails } from '../redux/codeSlice';

export default function Editor({ onChange }) {

  const currentCode = useSelector((state) => state.code.codeDetails)
  const [editTitle, setEditTitle] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (updatedValue) => {
    dispatch(setCodeDetails({
      ...currentCode, 
      content: updatedValue || ""
    }))
  }

  return (
    <div className='w-full h-[82vh] bg-[#0c0e17] rounded-lg'>
      <nav className='h-15 px-4 py-2 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div 
            className='w-[20vh] flex items-center justify-center text-white font-light bg-gray-600/30 py-1 rounded-md'
            onClick={() => {
              setEditTitle(true)
              document.getElementById("titleInput").focus()
            }}
            onMouseLeave={() => setEditTitle(false)}
          >
            {editTitle ? (
                <input
                  type='text'
                  id='titleInput'
                  value={currentCode.title}
                  className='outline-none w-full flex items-center pl-8.25'
                  onChange={(e) => {
                    const newTitle = e.target.value
                    dispatch(setCodeDetails({...currentCode, title : newTitle}))
                  }}
                >
                </input>
              ) : (currentCode.title)
            }
          </div>
        </div>


        <button
          className="flex justify-center items-center bg-gradient-to-r from-[#000cff] to-[#3636e6] border border-blue-600 py-0.5 rounded-md gap-1.5 px-2 hover:scale-98 active:bg-blue-900 duration-75"
          onClick={() => onChange()}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 w-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Share_iOS_Export"> <path id="Vector" d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
          <div className='text-white font-normal'>Share</div>
        </button>
      </nav>
      <div className='w-full px-3'>
        <CodeEditor code={currentCode.content} selectedLanguage={currentCode.language} onChange={handleChange} />
      </div>
    </div>
  )
}
