import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { Home } from './pages/home/home.tsx'
import { Login } from './pages/login/login.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
