import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ProductosExistenciaBaja = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/productos/ExistenciaMenor20')
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
          <h3>Productos con baja existencia</h3>
        </div>
        <div>
          <br></br>
        </div>
      </div>
      <br></br>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Existencia</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.Codigo}</td>
                <td>{item.Producto}</td>
                <td>{item.Existencia}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
