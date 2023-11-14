import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ExistenciaProductos = () => {
  const [selectedOption, setSelectedOption] = useState('general');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = '';

        // Determine the endpoint based on the selected option
        switch (selectedOption) {
          case 'general':
            endpoint = 'http://localhost:3000/productos/ExistenciaGeneral';
            break;
          case 'sucursal':
            endpoint = 'http://localhost:3000/productos/ExistenciaSucursal/2';
            break;
          // Add more cases as needed

          default:
            break;
        }

        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    fetchData();
  }, [selectedOption]); // Trigger the effect whenever the selectedOption changes
  
  /*useEffect(() => {
    axios.get('http://localhost:3000/productos/ExistenciaGeneral')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        swal("Error en el servidor", "Hubo un error al obtener datos del servidor. Por favor, inténtalo de nuevo.", "error")
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/productos/ExistenciaSucursal/2')
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        swal("Error en el servidor", "Hubo un error al obtener datos del servidor. Por favor, inténtalo de nuevo.", "error")
      });
  }, []); */

  return (
    <main className='main-container'>
      <div className='main-title'>
        <div>
          <br></br>
          <h3>Existencia de Productos</h3>
        </div>
        <div>
          <label>Sucursal</label>
          <br></br>
          <input id='id_sucursal' name='id_sucursal' type='text' />
        </div>
        <div>
          <label>Filtro</label>
          <br></br>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} name='filtro' id='filtro'>
            <option value="general">General</option>
            <option value="sucursal">Por sucursal</option>
          </select>
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
                <td>{item.codigo}</td>
                <td>{item.nombre}</td>
                <td>{item.TotalExistencia}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
