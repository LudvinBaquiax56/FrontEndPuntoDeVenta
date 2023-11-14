import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const ProductosVendidos = () => {
  const defaultFechaInicio = '2023-01-01'; // Fechas determinadas de inicio y fin 
  const defaultFechaFin = '2023-12-31'
  const [selectedOption, setSelectedOption] = useState('masVendidos');
  const [fechaInicio, setFechaInicio] = useState(defaultFechaInicio);
  const [fechaFin, setFechaFin] = useState(defaultFechaFin);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = '';
        let response;

        // Determina la ruta dependiendo de la opcion activa en el select
        switch (selectedOption) {
          case 'masVendidos':
            endpoint = `http://localhost:3000/productos/MasVendidos/${fechaInicio},${fechaFin}`;
            response = await axios.get(endpoint);
            setData(response.data[0]);
            break;
          case 'menosVendidos':
            endpoint = `http://localhost:3000/productos/MenosVendidos/${fechaInicio},${fechaFin}`;
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
  }, [selectedOption]); // Trigger the effect whenever the selectedOption changes

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <div>
          <br></br>
          <h3>Productos Vendidos</h3>
        </div>

        <div>
          <label>Desde</label>
          <br></br>
          <input onChange={handleFechaInicioChange} value={fechaInicio || defaultFechaInicio} type='date' id='desde' name='desde'></input>
        </div>
        <div>
          <label>Hasta</label>
          <br></br>
          <input onChange={handleFechaFinChange} value={fechaFin || defaultFechaFin} type='date' id='hasta' name='hasta'></input>
        </div>
        <div>
        <label>Filtro</label>
        <br></br>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} name='filtro' id='filtro'>
            <option value="masVendidos">Más vendidos</option>
            <option value="menosVendidos">Menos vendidos</option>
          </select>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.Codigo}</td>
                <td>{item.Producto}</td>
                <td>{item.TotalVendido}</td>
                <td>{item.Fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
