import React from 'react';

export default function Output({ result = "" }) {
  return (
    <div className="w-1/3 bg-gray-800 text-white">
        <div className='px-4 font-serif py-1 bg-gray-900 w-full h-8 flex items-center mb-2'>
            <div className='h-7 w-20 bg-gray-400 text-white rounded-md flex justify-center items-center'>Output</div>
        </div>
      <div className='ml-2'>{result}</div>
    </div>
  );
}