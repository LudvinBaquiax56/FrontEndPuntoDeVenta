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
            <h4>Ventas por <br></br> Cliente</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/ComprasPorPeriodo">
          <div className='card'>
            <h4>Compras <br></br>por periodo</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/VentasPorPeriodo">
          <div className='card'>
            <h4>Ventas<br></br>por periodo</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/ExistenciaProductos">
          <div className='card'>
            <h4>Existencia<br></br>de Productos</h4>
          </div>
        </NavLink>
        <NavLink className='link' to="/Reportes/ProductosExistenciaBaja">
          <div className='card'>
            <h4>Productos con existencia baja</h4>
          </div>
        </NavLink>
      </div>
    </main>
  )
}
