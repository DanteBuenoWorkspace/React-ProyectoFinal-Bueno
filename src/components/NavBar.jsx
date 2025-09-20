import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Finesse</div>
      <ul className="navbar-links">

        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/productos" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Productos
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/carrito" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Carrito
          </NavLink>
          <CartWidget/>
        </li>
        
      </ul>
    </nav>
  )
}
