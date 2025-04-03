import React from 'react'
import {Navbar} from './Index'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
