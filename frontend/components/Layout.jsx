import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from '../hooks/scrollTop';



import { CartProvider } from "../contexts/cartContext"


export default function Layout() {

    return (
        <CartProvider>
            <ScrollToTop />
            <div className="site-wrapper">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CartProvider>
)
}