import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Productos } from '../pages/Productos'
import { Carrito } from '../pages/Carrito'
import { NotFound } from "../pages/NotFound"
import { ItemDetailContainer } from "../components/ItemDetailContainer.jsx"
import { CheckoutForm } from "../components/CheckoutForm.jsx" 

export const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path="/categoria/:catId" element={<Productos />} />
      <Route path='/productos/:id' element={<ItemDetailContainer />} />
      <Route path='/carrito' element={<Carrito />} />
      <Route path='/checkout' element={<CheckoutForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
