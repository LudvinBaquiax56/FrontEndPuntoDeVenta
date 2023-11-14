import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const AjusteInventario = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Ajustes de Inventario</h3>
        <NavLink to="/CrearAjusteInventario">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <br></br>
      <div className='table-responsive'>
        <table name="ajustes" id="ajustes" className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Referencia de Ajuste</th>
              <th>Fecha de Ajuste</th>
            </tr>
          </thead>
          {/*<tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.razon}</td>
                <td>{item.fecha_hora}</td>
              </tr>
            ))
            }
          </tbody>*/}
        </table>
      </div>
    </main>
  )
}
