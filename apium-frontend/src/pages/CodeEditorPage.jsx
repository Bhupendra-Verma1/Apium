import React, { useState} from "react";
import { EditorHeader, Editor, Output, ShareSnippetDialog} from "../Index";


const CodeEditorPage = () => {

  const [showForm, setShowForm] = useState(false)

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-950 w-full h-screen relative duration-300'>
      <EditorHeader />
      <div className="w-full flex gap-2 px-4">
        <Editor onChange={() => setShowForm((prev) => !prev)} />
        <Output />
      </div>
      <ShareSnippetDialog showForm ={showForm} setShowForm = {setShowForm} />
    </div>

  );
};

export default CodeEditorPage;
