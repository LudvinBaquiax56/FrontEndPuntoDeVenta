import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';

export const AgregarUsuario = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [sucursales, setSucursales] = useState([]);
  const [empleados, setEmpleado] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/empleado/find')
      .then((response) => setEmpleado(response.data))
      .catch((error) => console.error('Error al obtener las marcas', error));

    axios.get('http://localhost:3000/rol/find')
      .then((response) => setRoles(response.data))
      .catch((error) => console.error('Error al obtener las categorías', error));

    axios.get('http://localhost:3000/sucursal/find')
      .then((response) => setSucursales(response.data))
      .catch((error) => console.error('Error al obtener las sucursales', error));
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/usuario/create', data);
      console.log('Respuesta del servidor:', response.data);

      swal("Registrado", "La marca ha sido registrada con éxito", "success");

    } catch (error) {
      swal("Error", "Error", "error")
      console.error('Error al enviar datos al backend:', error);
    }
  };

  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }

  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Usuarios</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre_usuario' type='text' {...register('nombre_usuario', { required: true })} />
            {errors.nombre_usuario?.type === 'required' && alertaCampo()}
            <label>Usuario</label>
          </div>
          <div className='user-box'>
            <input name='contraseña' type='text' {...register('contraseña', { required: true })} />
            {errors.contraseña?.type === 'required' && alertaCampo()}
            <label>Contraseña</label>
          </div>
          <div className='user-box'>
            <label>Empleado</label><br></br>
            <select className='classic' {...register('id_empleado', { required: true })}>
              {empleados.map((empleado) => (
                <option key={empleado.id} value={empleado.id}>
                  {empleado.nombre}
                </option>
              ))}
            </select>
            {errors.id_empleado?.type === 'required' && alertaCampo()}
          </div>

          <div className='user-box'>
            <label>Rol</label><br></br>
            <select className='classic' {...register('id_rol', { required: true })}>
              {roles.map((rol) => (
                <option key={rol.id} value={rol.id}>
                  {rol.nombre}
                </option>
              ))}
            </select>
            {errors.id_rol?.type === 'required' && alertaCampo()}
          </div>
          <br></br>
          <div className='user-box'>
            <label>Sucursal</label><br></br>
            <select className='classic' {...register('id_sucursal', { required: true })}>
              {sucursales.map((sucursal) => (
                <option key={sucursal.id} value={sucursal.id}>
                  {sucursal.nombre}
                </option>
              ))}
            </select>
            {errors.id_sucursal?.type === 'required' && alertaCampo()}
          </div>
          <br></br>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
