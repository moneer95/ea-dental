import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from '../hooks/scrollTop';
import { Toaster } from "react-hot-toast";



import { CartProvider } from "../contexts/cartContext"


export default function Layout() {

    return (
        <CartProvider>
            <ScrollToTop />
            <div className="site-wrapper">
                <Toaster
                    position="top-right"
                />
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CartProvider>
)
}