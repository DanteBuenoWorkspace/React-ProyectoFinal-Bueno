import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer'
import { NavLink, useParams } from "react-router-dom";
import "./Productos.css";

export const Productos = () => {

  const { catId } = useParams();

  return (
    <div className="productos-container">
      <h1>Productos</h1>

      <nav className="categorias-nav">
        <NavLink
          to="/categoria/digital"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Digital
        </NavLink>

        <NavLink
          to="/categoria/automático"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Automático
        </NavLink>

        <NavLink
          to="/categoria/lujo"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Lujo
        </NavLink>

        <NavLink
          to="/categoria/smartwatch"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Smartwatch
        </NavLink>
      </nav>

      <ItemListContainer categoria={catId} />
    </div>
  )
}
