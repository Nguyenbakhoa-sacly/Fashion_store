import React from 'react'
import { Route, Routes } from "react-router-dom";
import {
  Cart,
  CategoryProducts, Contact, DetailProduct, Earnings, Home, LogIn, LogUp, Notpage, Pricing, Products, Settings
} from '../pages';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" exact element={<Products />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/services" element={<Settings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Notpage />} />
        <Route path="/category/:name" element={<CategoryProducts />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/logup' element={<LogUp />} />
      </Routes>
    </div>
  )
}

export default Main