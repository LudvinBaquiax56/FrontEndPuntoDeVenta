import React from 'react'
import { Link, NavLink } from "react-router-dom"

export const Proveedores = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Proveedores</h3>
      </div>
      <div>
        <NavLink to="/AgregarProveedor">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
        Hola bro
      </div>
    </main>
  )
}
