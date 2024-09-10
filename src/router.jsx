import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Inicio from './views/inicio'
import Login from './views/login'
import Registro from './views/Registro'
import Adminlayout from './layouts/Adminlayout'
import Ordenes from './views/Ordenes'
import Producto from './components/Producto'
import Productos from './views/Productos'

const router = createBrowserRouter([
{
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Inicio />
        }
    ]
},
{
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/registro',
            element: <Registro />
        }
    ]
},
{
    path: '/admin',
     element: <Adminlayout />,
     children: [
         {
            index: true,
            element: <Ordenes />
         },
         {
             path: '/admin/productos',
             element: <Productos />
         }
     ]
 },

])

export default router