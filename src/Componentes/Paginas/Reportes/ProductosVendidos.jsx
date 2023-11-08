import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ProductosVendidos = () => {
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
          <h3>Productos Vendidos</h3>
        </div>

        <div>
          <label for='desde'>Desde</label>
          <br></br>
          <input type='date' id='desde' name='desde'></input>
        </div>
        <div>
          <label for='hasta'>Hasta</label>
          <br></br>
          <input type='date' id='hasta' name='hasta'></input>
        </div>
        <div>
        <label for='filtro'>Filtro</label>
        <br></br>
          <select name='filtro' id='filtro'>
            <option value="masVendidos">Más vendidos</option>
            <option value="menosVendidos">Menos vendidos</option>
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