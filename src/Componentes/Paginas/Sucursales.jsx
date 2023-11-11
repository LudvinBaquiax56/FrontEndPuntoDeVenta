import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const Sucursales = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/sucursal/find')
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
      const response = await axios.put(`http://localhost:3000/sucursal/delete/${id}`);
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
        <h3>Sucursales</h3>
        <NavLink to="/AgregarSucursal">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
      <div className='table-responsive'>
        <table className='table' >
          <thead className='table-light'>
            <tr>
              <th>ID</th>
              <th>Numero Sucursal</th>
              <th>Nombre</th>
              <th>Ubicacion</th>
              <th>Telefono</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.no_sucursal}</td>
                <td>{item.nombre}</td>
                <td>{item.ubicacion}</td>
                <td>{item.telefono}</td>
                <td><NavLink to={`/EditarSucursal/${item.id}`}><button type="button" class="btn btn-info"><BsFillPencilFill className='icon' /></button></NavLink></td>
                <td><button onClick={() => handleClick(item.id)} type="button" className="btn btn-danger"><BsFillTrashFill className='icon' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
