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
import { UsuarioContextProvider } from './components/context/usuario-context.tsx'
import { Dashboard } from './pages/dashboard/dashboard.tsx'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/es/locale/pt_BR';
import Produtos from './pages/produto/produtos.tsx'
import Settings from './pages/usuario/settings.tsx'
import Fornecedores from './pages/fornecedor/fornecedores.tsx'

//const {usuario} = useUsuarioContext()

const primaryColor = '#1890ff';

//todo: rotas publicas e privadas
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
    element: <Dashboard/>,
  },
  {
    path: '/produtos',
    element: <Produtos />
  },
  {
    path: '/fornecedores',
    element: <Fornecedores/>
  },
  {
    path: '/clientes',
    element: <div>clientes</div>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={ptBR}
      theme={
        {
          token: {
            colorPrimary:"#A855F7",
          },
          components:{
            Button:{
              borderRadius:100,
            },
          }
        }
      }
    >
      <UsuarioContextProvider>
        <RouterProvider router={router} />
      </UsuarioContextProvider>
    </ConfigProvider>
  </React.StrictMode>
)
