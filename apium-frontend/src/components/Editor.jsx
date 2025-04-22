import React, { useState } from 'react'
import CodeEditor from './CodeEditor';
import { useSelector, useDispatch } from 'react-redux';
import { setCodeDetails } from '../redux/codeSlice';

export default function Editor({ onChange }) {

  const currentCode = useSelector((state) => state.code.codeDetails)
  const description = useSelector((state) => state.code.description)
  const [editTitle, setEditTitle] = useState(false)
  const [loader, setLoader] = useState(false);
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
                  dispatch(setCodeDetails({ ...currentCode, title: newTitle }))
                }}
              >
              </input>
            ) : (currentCode.title)
            }
          </div>
        </div>
        <div className='flex items-center justify-end gap-3'>

          {!currentCode.id ? (
            <button
              className="w-[15vh] flex justify-center items-center bg-gradient-to-r from-[#c16d14] to-[#ce7a0c] border border-orange-400 py-0.5 rounded-md gap-1.5 px-2 hover:scale-98 active:bg-orange-900 duration-75"
            >
              {!loader ? (
                <div>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#e2e8f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#e2e8f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#e2e8f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
              ) : (
                <div className='w-4 h-4 rounded-full bg-transparent border-2 border-t-transparent animate-spin text-white'></div>
              )}
              <div className='text-white font-normal'>Save</div>
            </button>
          ) : (
            <button
              className="w-[15vh] flex justify-center items-center bg-[#0d3b66] border border-blue-900 rounded-md gap-1.5 px-2 py-0.5 hover:scale-98 active:bg-blue-900 duration-75"
            >
              {!loader ? (
                <div>
                  <svg fill="#e2e8f0" version="1.1" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" className='w-5 h-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata> <sfw xmlns="&amp;ns_sfw;"> <slices> </slices> <slicesourcebounds width="505" height="984" bottomleftorigin="true" x="0" y="-552"> </slicesourcebounds> </sfw> </metadata> <g> <g> <g> <path d="M12,22C6.5,22,2,17.5,2,12c0-0.6,0.4-1,1-1s1,0.4,1,1c0,4.4,3.6,8,8,8s8-3.6,8-8s-3.6-8-8-8C9.3,4,6.8,5.3,5.4,7.6 C5,8,4.4,8.1,4,7.8C3.5,7.5,3.4,6.9,3.7,6.4C5.5,3.7,8.7,2,12,2c5.5,0,10,4.5,10,10S17.5,22,12,22z"></path> </g> </g> <g> <g> <path d="M12,13c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v5C13,12.6,12.6,13,12,13z"></path> </g> </g> <g> <g> <path d="M15,16c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C15.5,15.9,15.3,16,15,16z "></path> </g> </g> <g> <g> <path d="M8,8H4C3.4,8,3,7.6,3,7V3c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S8.6,8,8,8z"></path> </g> </g> </g> </g></svg>
                </div>
              ) : (
                <div className='w-5 h-5 rounded-full bg-transparent border-2 border-t-white animate-spin'></div>
              )}
              <div className='text-white font-normal'>Update</div>
            </button>
          )}

          <button
            className="w-auto flex justify-center items-center bg-gradient-to-r from-[#000cff] to-[#3636e6] border border-blue-600 py-0.5 rounded-md gap-1.5 px-2 hover:scale-98 active:bg-blue-900 duration-75"
            onClick={() => onChange()}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-5 w-5'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Share_iOS_Export"> <path id="Vector" d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            <div className='text-white font-normal'>Share</div>
          </button>
        </div>
      </nav>
      <div className='w-full px-3'>
        <CodeEditor code={currentCode.content} selectedLanguage={currentCode.language} onChange={handleChange} />
      </div>
    </div>
  )
}
