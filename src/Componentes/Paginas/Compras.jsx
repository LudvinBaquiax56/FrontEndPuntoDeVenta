import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Compras = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cliente/find')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        swal("Error en el servidor", "Hubo un error al obtener datos del servidor. Por favor, inténtalo de nuevo.", "error")
      });
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Pedidos de Compras</h3>
        <NavLink to="/RealizarCompra">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>No. Factura</th>
              <th>Proveedor</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no_factura}>
                <td>{item.id_proveedor}</td>
                <td>{item.fecha}</td>
                <td>{item.total}</td>
                <td><NavLink to={`/VerCompra/${item.id}`}><button type="button" class="btn btn-info"><BsFillFileEarmarkFill className='icon' /></button></NavLink></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
