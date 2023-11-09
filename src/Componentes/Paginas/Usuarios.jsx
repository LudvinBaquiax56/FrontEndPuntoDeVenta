import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

//Iconos para el menu
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import swal from 'sweetalert';

export const Usuarios = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/usuario/find')
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
        <h3>Usuarios</h3>
        <NavLink to="/AgregarUsuario">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Empleado</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre_usuario}</td>
                <td>{item.id_empleado}</td>
                <td>{item.id_rol}</td>
                <td><NavLink to={`/EditarUsuario/${item.id}`}><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></NavLink></td>
                <td><button type="button" class="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main >
  )
}
