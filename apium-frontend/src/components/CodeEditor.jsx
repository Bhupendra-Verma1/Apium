import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, selectedLanguage }) => {
  return (
    <div className='w-1/2'>
      <div className='px-4 font-serif py-1 bg-black/80 w-full h-8 flex items-center'></div>
      <div className="rounded-b-lg overflow-hidden">
        <Editor
          height="600px"
          theme="vs-dark" // Options: "light", "vs-dark", "hc-black"
          language={selectedLanguage || "javascript"} // Default to JavaScript
          value={code}
          onChange={onChange}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
            tabSize: 4,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
