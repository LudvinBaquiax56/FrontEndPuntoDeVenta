import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Inicio = () => {
  const [data, setData] = useState([]);
  const [valorProductos, setValorProductos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/productos/CantidadExistenciaMenor20'); // Reemplaza con la URL de tu endpoint
        const datos = response.data;

        // Accede al valor deseado en los datos y actualiza el estado
        const nuevoValorProductos = datos && datos[0] ? datos[0].cantidadProductos : null;
        setValorProductos(nuevoValorProductos);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

  return (
    <main className='main-container-inicio'>
      <div className='main-cards'>
        <NavLink className='link' to="/Reportes/ProductosExistenciaBaja">
          <div className='card'>
            <h3>ALERTA</h3>
            Productos con baja existencia
            <h1>{valorProductos !== null ? `${valorProductos}` : 'Cargando...'}</h1>
          </div>
        </NavLink>
      </div>
    </main>
  )
}
