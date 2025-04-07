import React, { useState } from "react";
import { EditorHeader, Editor, Output } from "../Index";


const CodeEditorPage = () => {

  const [shareForm, setShareForm] = useState(false)
  const [title, setTitle] = useState("")

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-950 w-full h-screen relative duration-1000'>
      <EditorHeader />
      <div className="w-full flex gap-2 px-4">
        <Editor shareForm={shareForm} onChange={() => setShareForm((prev) => !prev)} />
        <Output />
      </div>
      {shareForm && (
        <>
          {/* Background overlay with blur */}
          <div className="absolute inset-0 bg-gray-600/10  backdrop-blur-[2px] z-10"></div>

          {/* Modal */}
          <div className="absolute w-1/4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
            <div className="flex justify-between items-center py-2">
              <div><h1 className="font-bold">Share Snippet</h1></div>
              <div 
                className=" px-3 pb-1 w-7 h-7 rounded-full bg-transparent text-gray-500 flex justify-center items-center cursor-pointer text-3xl"
                onClick={() => setShareForm(false)}
              >
                ⨯
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-extralight text-xs text-gray-400">Title</label>
              <input type="text" className="w-full px-2 py-1 outline-none h-9 border-2 border-blue-500 rounded-md" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex justify-end items-center py-4 gap-2">
              <button className="w-20 h-8 bg-transparent flex justify-center items-center rounded-md text-gray-400" onClick={() => setShareForm(false)}> Cancel</button>
              <button 
                className="w-20 h-8 bg-blue-500 flex justify-center items-center rounded-md text-white"
              >Share</button>
            </div>
          </div>
        </>
      )}


    </div>

  );
};

export default CodeEditorPage;
