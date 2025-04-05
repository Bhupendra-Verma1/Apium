import React from 'react';
import { Clock } from 'lucide-react';

export default function Output({ response }) {
  return (
    <div className="w-full h-[82vh] bg-[#0c0e17] rounded-lg flex flex-col">
      <div className="flex items-center px-3 py-2 bg-[#0b0d14] rounded-t-lg">
        <div className="w-6 h-6 flex justify-center items-center rounded-md bg-gray-800 mr-2">
          <svg
            className="w-4 h-4 text-blue-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z"></path>
          </svg>
        </div>

        <span className="text-white text-sm font-medium">Output</span>
      </div>
      <div className="flex-grow border border-[#1e2330] m-3 mt-1 rounded-md flex flex-col items-center justify-center space-y-1">
        {response ? (
          <p className="text-gray-200 p-4 text-center">{response}</p>
        ) : (
          <>
            <div className="w-8 h-8 rounded-lg flex justify-center items-center border border-white/20 shadow-lg bg-gray-800">
              <Clock size={20} color="white" />
            </div>
            <p className="text-gray-400">Run your code to see the output here...</p>
          </>
        )}
      </div>
    </div>
  );
}
