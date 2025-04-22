import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export default function EditorLayout() {
  return (
    <div className='w-full'>
        <Toaster position='top-center' reverseOrder = {false} />
        <Outlet />
    </div>
  )
}
