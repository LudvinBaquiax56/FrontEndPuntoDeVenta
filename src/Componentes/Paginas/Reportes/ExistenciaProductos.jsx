import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ExistenciaProductos = () => {
  const [selectedOption, setSelectedOption] = useState('general');
  const [data, setData] = useState([]);
  const [idSucursal, setIdSucursal] = useState('1');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = '';
        let response;
        const finalIdSucursal = idSucursal || '1';//Si el valor del input de id sucursal es nulo entonces que el valor se mantenga en 1
        // Determina la ruta dependiendo de la opcion activa en el select
        switch (selectedOption) {
          case 'general':
            endpoint = 'http://localhost:3000/productos/ExistenciaGeneral';
            response = await axios.get(endpoint);
            setData(response.data);
            break;
          case 'sucursal':
            endpoint = `http://localhost:3000/productos/ExistenciaSucursal/${finalIdSucursal}`;
            response = await axios.get(endpoint);
            setData(response.data[0]);
            break;

          default:
            break;
        }

        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    fetchData();
  }, [selectedOption, idSucursal]); // Trigger the effect whenever the selectedOption changes

  const handleInputChange = (e) => {
    setIdSucursal(e.target.value);
  };

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
          <input id='id_sucursal' name='id_sucursal' type='text' value={idSucursal} onChange={handleInputChange} />
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
