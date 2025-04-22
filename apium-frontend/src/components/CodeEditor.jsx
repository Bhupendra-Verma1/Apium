import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, selectedLanguage, theme = "custom-dark", readOnly = false }) => {

  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", foreground: "#D4D4D4", background: "#1E1E1E" },
        { token: "comment", foreground: "#6A9955", fontStyle: "italic" },
        { token: "keyword", foreground: "#C586C0" },
        { token: "number", foreground: "#B5CEA8" },
        { token: "string", foreground: "#CE9178" },
        { token: "operator", foreground: "#D4D4D4" },
        { token: "variable", foreground: "#9CDCFE" },
        { token: "function", foreground: "#DCDCAA" },
      ],
      colors: {
        "editor.background": "#0d0e14",
        "editor.lineHighlightBackground": "#2a2a2a",
        "editorLineNumber.foreground": "#858585",
        "editorCursor.foreground": "#AEAFAD",
        "editorIndentGuide.background": "#404040",
      },
    });
  };

  return (
    <div className="w-full">
      <div className={`overflow-hidden pt-4 ${theme === "vs-light" ? 'rounded-xl' : 'bg-[#0d0e14] border border-gray-800 rounded-lg'}`}>
        <Editor
          height="395px"
          beforeMount={handleEditorWillMount} // <-- important
          theme={theme}
          language={selectedLanguage || "java"}
          value={code}
          onChange={onChange}
          options={{
            fontSize: 14,
            readOnly : readOnly,
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
