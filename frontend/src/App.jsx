import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './website/Pages/Layout'
import AdminLayout from './admin/Pages/AdminLayout'
import Home from './website/Pages/Home'
import Store from './website/Pages/Store'
import Deshboard from './admin/Pages/Deshboard'
import CategoryAdd from './admin/Pages/Category/CategoryAdd'

export default function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/store",
            element: <Store />
          }
        ]
      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <Deshboard />,
          },
          {
            path: "category",
            element: <CategoryAdd />
          }
        ]
      }

    ]
  )
  return (
    <RouterProvider router={router} />
  )
}
