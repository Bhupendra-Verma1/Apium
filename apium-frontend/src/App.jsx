import React from 'react'
import { Navbar } from './Index'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <main>
        <Toaster position='top-center' reverseOrder = {false} />
        <Outlet />
      </main>
    </div>
  )
}

export default App
