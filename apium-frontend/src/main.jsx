import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Register, Login, About, Contact, CodeEditorPage, ResetPassword, Profile, ShareSnippet, Snippet } from './Index.js'

import './index.css'
import App from './App.jsx'
import EditorLayout from './EditorLayout.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/register',
        element : <Register />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/reset',
        element : <ResetPassword />
      },
      {
        path : "/profile",
        element : <Profile />
      },
      {
        path : "/snippets",
        element : <ShareSnippet />
      },
      {
        path : "/snippet",
        element : <Snippet />
      }
    ]
  },
  {
    path : "/editor",
    element : <EditorLayout />,
    children : [
      {
        path : "",
        element : <CodeEditorPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
