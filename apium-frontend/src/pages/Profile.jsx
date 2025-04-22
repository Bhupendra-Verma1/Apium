import React,{useState} from 'react'
import { Code, Bookmark, Clock, Share, MessageCircle, Menu, ZoomIn, PlusCircle, MousePointer, Square, ArrowUpRight, Minus, Pencil, Type, Check, MessageSquare } from 'lucide-react';


function Profile() {
    const [activeTab, setActiveTab] = useState('executions');
  return (
    <div className="bg-white text-black min-h-screen font-sans">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-2xl font-bold text-white">
              <span>A</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">Ashutosh Singh</h2>
              <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs">Pro Member</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <span className="mr-1">✉</span>
              <span>ashu@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-5 shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm text-gray-600">Total code runs</h3>
                <p className="text-3xl font-bold mt-2">5</p>
                <p className="text-xs text-gray-500 mt-4">Code Executions</p>
              </div>
              <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center">
                <Code size={20} className="text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-xs text-gray-600">
              <Clock size={12} className="mr-1" />
              <span>Last 24h: 5</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm text-gray-600">Saved for later</h3>
                <p className="text-3xl font-bold mt-2">1</p>
                <p className="text-xs text-gray-500 mt-4">Starred Snippets</p>
              </div>
              <div className="w-10 h-10 rounded-md bg-amber-100 flex items-center justify-center">
                <Bookmark size={20} className="text-amber-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-xs text-gray-600">
              <span>Most starred:</span>
              <span className="ml-1 text-amber-600">python</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm text-gray-600">Different languages</h3>
                <p className="text-3xl font-bold mt-2">4</p>
                <p className="text-xs text-gray-500 mt-4">Languages Used</p>
              </div>
              <div className="w-10 h-10 rounded-md bg-fuchsia-100 flex items-center justify-center">
                <Code size={20} className="text-fuchsia-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-xs text-gray-600">
              <span>Most used:</span>
              <span className="ml-1 text-fuchsia-600">javascript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="flex border-b border-gray-200">
          <button 
            className={`px-6 py-4 text-sm flex items-center ${activeTab === 'executions' ? 'border-b-2 border-purple-700 text-black' : 'text-gray-600'}`}
            onClick={() => setActiveTab('executions')}
          >
            <Code size={16} className="mr-2" />
            Code Executions
          </button>
          <button 
            className={`px-6 py-4 text-sm flex items-center ${activeTab === 'starred' ? 'border-b-2 border-purple-700 text-black' : 'text-gray-600'}`}
            onClick={() => setActiveTab('starred')}
          >
            <Bookmark size={16} className="mr-2" />
            Starred Snippets
          </button>
        </div>


        <div className="p-6">
          {activeTab === 'executions' && (
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-200 text-amber-900 w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-sm">
                    JS
                  </div>
                  <span className="text-xs text-gray-600">JAVASCRIPT • 12/3/2024, 12:06:00 AM</span>
                </div>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Success</span>
              </div>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded overflow-hidden relative">
                <div className="text-gray-500">// JavaScript Playground</div>
                <div>
                  <span className="text-purple-600">const</span>{" "}
                  <span className="text-blue-600">numbers</span> = [<span className="text-amber-600">1, 2, 3, 4, 5, 6</span>];
                </div>
                <div className="mt-2">
                  <span className="text-gray-500">// Map numbers to their squares</span>
                </div>
                <div>
                  <span className="text-purple-600">const</span>{" "}
                  <span className="text-blue-600">squares</span> = numbers.map(
                  <span className="text-amber-600">n = n * n</span>);
                </div>
                <div className="mt-2">
                  <span className="text-purple-600">console</span>.log(
                  <span className="text-green-600">"Squared:"</span>, squares);
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
              </div>
              <div className="mt-2 text-right">
                <button className="text-xs text-purple-700">Show more</button>
              </div>
            </div>
          )}
          
          {activeTab === 'starred' && (
            <div className="text-center text-gray-600 py-8">
              No starred snippets
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile