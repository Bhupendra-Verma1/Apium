import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store.jsx'
import {Provider} from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Register, Login, About, Contact, CodeEditorPage, ResetPassword } from './Index.js'
import './index.css'
import App from './App.jsx'

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
    ]
  },
  {
    path : "/editor",
    element : <CodeEditorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
