import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import  HomePage from './pages/HomePage'




export const Layout = () => {

    return (
        <>
            <Header />
            <div id="content">
            <HomePage/>
                {/* <Outlet /> */}

             
            </div>
            <Footer />
        </>
    )
}
