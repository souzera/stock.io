import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom"

import { Home } from './pages/home/home.tsx'
import { Login } from './pages/login/login.tsx'
import { CadastroUsuario } from './pages/cadastro/cadastro-usuario.tsx'
import useUsuarioContext, { UsuarioContextProvider } from './components/context/usuario-context.tsx'
import { Dashboard } from './pages/dashboard/dashboard.tsx'
import Produto from './pages/produto/produtos.tsx'
import Produtos from './pages/produto/produtos.tsx'

//const {usuario} = useUsuarioContext()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastrar-se',
    element: <CadastroUsuario />
  },
  {
    path: `/dashboard`,
    element: <Dashboard username={'matheus'} />
  },
  {
    path: '/produtos',
    element: <Produtos/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsuarioContextProvider>
      <RouterProvider router={router} />
    </UsuarioContextProvider>
  </React.StrictMode>
)
