import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const VentasPorPeriodo = () => {
  const defaultFechaInicio = '2023-01-01'; // Fechas determinadas de inicio y fin 
  const defaultFechaFin = '2023-12-31'
  const [fechaInicio, setFechaInicio] = useState(defaultFechaInicio);
  const [fechaFin, setFechaFin] = useState(defaultFechaFin);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/ventas/Ventas/${fechaInicio},${fechaFin}`);
  
        setData(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error('Error al realizar la consulta:', error);
      }
    };
    fetchData();
  }, [fechaInicio, fechaFin]);

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
    console.log(fechaInicio);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <div>
          <br></br>
          <h3>Ventas por Periodo</h3>
        </div>
        <div>
          <label>Desde</label>
          <br></br>
          <input value={fechaInicio || defaultFechaInicio} onChange={handleFechaInicioChange} type='date' id='desde' name='desde'></input>
        </div>
        <div>
          <label>Hasta</label>
          <br></br>
          <input value={fechaFin || defaultFechaFin} onChange={handleFechaFinChange} type='date' id='hasta' name='hasta'></input>
        </div>
      </div>
      <br></br>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.Producto}</td>
                <td>{item.Cantidad}</td>
                <td>{item.Precio}</td>
                <td>{item.Subtotal}</td>
                <td>{item.Fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
