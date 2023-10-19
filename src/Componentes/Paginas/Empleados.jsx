import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const Empleados = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/empleado/find')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        swal("Error en el servidor", "Hubo un error al obtener datos del servidor. Por favor, inténtalo de nuevo.", "error")
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Empleados</h3>
        <NavLink to="/AgregarEmpleado">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Telefono</th>
              <th>E-mail</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.telefono}</td>
                <td>{item.email}</td>
                <td><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></td>
                <td><button type="button" class="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
