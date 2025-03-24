import { useState } from 'react';
import { CodeEditor, Output, EditorHeader, Form, FileExplorer } from '../Index';


const CodeEditorPage = () => {

  const [currentCode, setCurrentCode] = useState({
    title: '',
    language: '',
    content: ''
  });

  const [output, setOutput] = useState("")

  return (
    <div className='bg-[#343a40]'>

      {/* header of editor */}
      <EditorHeader currentCode={currentCode} setOutput={setOutput} />

      <div className='flex'>

        {/* File Explorer */}
        <FileExplorer setCurrentCode={setCurrentCode} />

        {/* code editor */}
        <CodeEditor
          code={currentCode.content}
          onChange={(value) => setCurrentCode({ ...currentCode, content: value })}
          selectedLanguage={currentCode.language}
        />

        {/* output */}
        <Output result={output} />
      </div>
    </div>

  );
};

export default CodeEditorPage;
