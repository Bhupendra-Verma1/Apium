import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, selectedLanguage }) => {
  return (
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
  );
};

export default CodeEditor;
