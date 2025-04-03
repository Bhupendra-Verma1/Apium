import React from "react";
import { EditorHeader , Editor, Output } from "../Index";


const CodeEditorPage = () => {


  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-950 w-full h-screen'>
      <EditorHeader />
      <div className="w-full flex gap-4 px-4">
        <Editor />
        <Output />
      </div>
    </div>

  );
};

export default CodeEditorPage;
