import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const Clientes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cliente/find')
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
      const response = await axios.put(`http://localhost:3000/cliente/delete/${id}`);
      console.log('Respuesta del servidor:', response.data);
      swal("Actualizado", "El dato ha sido eliminado con éxito", "success");
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el proveedor:', error);
      swal("Error", "Se produjo un error al eliminar el dato", "error");
    }
  }

  return (
    <main className='main-container container'>
      <div className='main-title'>
        <h3>Clientes</h3>
        <NavLink to="/AgregarCliente">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <br></br>
      <div className='table-responsive'>
        <table name="clientes" id="clientes" className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Nit</th>
              <th>Telefono</th>
              <th>Puntos</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.nit}</td>
                <td>{item.telefono}</td>
                <td>{item.puntos_privilegio}</td>
                <td><NavLink to={`/EditarCliente/${item.id}`}><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></NavLink></td>
                <td><button onClick={() => handleClick(item.id)} type="button" className="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
