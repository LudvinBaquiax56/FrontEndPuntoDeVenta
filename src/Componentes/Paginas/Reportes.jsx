import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Reportes = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Reportes</h3>
      </div>
      <div className='main-cards'>
        <NavLink className='link' to="/Reportes/ProductosVendidos">
          <div className='card'>
            <h4>Productos <br></br> Vendidos</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/ComprasClientes">
          <div className='card'>
            <h4>Clientes con más compras</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/ComprasPorCliente">
          <div className='card'>
            <h4>Compras por <br></br> Cliente</h4>
          </div>
        </NavLink>
        <div className='card'>
          <h4>Ventas</h4>
        </div>
        <div className='card'>
          <h4>Existencia de productos (Sucursal)</h4>
        </div>  
      </div>
      <div className='main-cards'>
        <div className='card'>
          <h4>Existencia de productos (General)</h4>
        </div>
      </div>
    </main>
  )
}
