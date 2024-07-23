import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Categories, { loader as CategoriesLoader } from "./pages/Categories/Categories"
import CategoDetail, { loader as categoDetailLoader } from "./pages/Categories/CategoDetail"
import Products, { loader as productsLoader } from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import Layout from "./components/Layout"
import { CheckoutForm, Return } from "./pages/Stripe"
import Error from "./components/Error"


// import "./server"
import Cart from './pages/Cart';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="categories"
      element={<Categories />}
      errorElement={<Error />}
      loader={CategoriesLoader}
    />
    <Route 
      path="categories/:catego" 
      element={<CategoDetail />} 
      errorElement={<Error />}
      loader={categoDetailLoader}
    />

    <Route
      path='cart'
      element={<Cart />}
      errorElement={<Error />}
    />

    <Route
      path='products'
      element={<Products />}
      loader={productsLoader}
      errorElement={<Error />}
    />

    <Route
      path='products/:prodId'
      element={<ProductDetail />}
      loader={productsLoader}
      errorElement={<Error />}
    />

    <Route
      path='checkout'
      element={<CheckoutForm/>}
      errorElement={<Error />}
    />

    <Route
      path='return'
      element={<Return/>}
      errorElement={<Error />}
    />

    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App />
   </React.StrictMode>
  );