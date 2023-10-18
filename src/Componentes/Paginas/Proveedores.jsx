import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Proveedores = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Proveedores</h3>
        <NavLink to="/AgregarProveedor">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Nit</th>
              <th>Telefono</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {/*
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.nombre}</td>
                <td>{item.nit}</td>
                <td>{item.telefono}</td>
          <td><NavLink to='/EditarProducto'><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></NavLink></td>
          <td><button type="button" class="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
        </tr>
      ))}
      */}
          </tbody>
        </table>
      </div>
    </main>
  )
}
