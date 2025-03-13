import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = ({ code, onChange }) => {
  return (
    <CodeMirror
      value={code}
      height="200px"
      extensions={[javascript()]}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
