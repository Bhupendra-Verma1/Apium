import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout.Jsx'
import { Home, Register, Login, About, Contact, CodeEditorPage } from './Index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = '/' element = {<Layout />}>
        <Route path = '' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
      </Route>
      <Route path = '/editor' element = {<CodeEditorPage />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
