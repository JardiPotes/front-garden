import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { Layout } from './Layout'
import { ProfilePage } from './pages/Profile';

const GlobalStyle = createGlobalStyle`
    #root { 
      padding: 0 3% 0 3%;
    }
`


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profil", 
        element: <ProfilePage /> 
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
