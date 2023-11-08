import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ClientesMasCompras = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categoria/find')
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
        <div>
          <br></br>
          <h3>Compras de Clientes</h3>
        </div>
        <div>
          <label for='desde'>Mostrar</label>
          <br></br>
          <select>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
        <div>
          <label for='hasta'>Filtro</label>
          <br></br>
          <select>
            <option value="masVendidos">Por sucursal</option>
            <option value="menosVendidos">General</option>
          </select>
        </div>
        <div>
          <br></br>
          <input className='button-37' type='button' value="Aplicar" />
        </div>
      </div>
      <br></br>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Total vendido</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/*data.map((item) => (
              <tr key={item.id}>
                <td>{item.productos.codigo}</td>
                <td>{item.productos.nombre}</td>
                <td>{item.TotalVendido}</td>
                <td>{item.facturas.fecha}</td>
              </tr>
            ))*/}
          </tbody>
        </table>
      </div>
    </main>
  )
}
