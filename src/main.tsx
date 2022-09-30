import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { Layout } from './Layout'

const GlobalStyle = createGlobalStyle`
    #root { 
      display: flex;
      flex-direction: column;
      padding: 0 3% 1% 3%;
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
