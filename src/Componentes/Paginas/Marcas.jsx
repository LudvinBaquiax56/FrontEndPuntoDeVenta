import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

//Iconos para el menu
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import swal from 'sweetalert';

export const Marcas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/marca/find')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
        swal("Error en el servidor", "Hubo un error al obtener datos del servidor. Por favor, inténtalo de nuevo.", "error")

      });
  }, []);

  const handleClick = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/marca/delete/${id}`);
      console.log('Respuesta del servidor:', response.data);
      swal("Actualizado", "El dato ha sido eliminado con éxito", "success");
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el proveedor:', error);
      swal("Error", "Se produjo un error al eliminar el dato", "error");
    }
  }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Marcas</h3>
        <NavLink to="/AgregarMarca">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td><NavLink to={`/EditarMarca/${item.id}`}><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></NavLink></td>
                <td><button onClick={() => handleClick(item.id)} type="button" className="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
