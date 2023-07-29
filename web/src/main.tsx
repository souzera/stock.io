import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { Home } from './pages/home/home.tsx'
import { Login } from './pages/login/login.tsx'
import { CadastroUsuario } from './pages/cadastro/cadastro-usuario.tsx'
import { UsuarioContextProvider } from './pages/dashboard/components/context/usuario-context.tsx'
import { Dashboard } from './pages/dashboard/dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastrar-se',
    element: <CadastroUsuario />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsuarioContextProvider>
      <RouterProvider router={router} />
    </UsuarioContextProvider>
  </React.StrictMode>
)
