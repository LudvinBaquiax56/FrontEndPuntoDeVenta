import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const EditarUsuario = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [sucursales, setSucursales] = useState([]);
  const [empleados, setEmpleado] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/empleado/find')
      .then((response) => setEmpleado(response.data))
      .catch((error) => console.error('Error al obtener las marcas', error));

    axios.get('http://localhost:3000/sucursal/find')
      .then((response) => setSucursales(response.data))
      .catch((error) => console.error('Error al obtener las sucursales', error));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  }
  const alertaCorreo = () => {
    swal("Error", "Formato de correo no valido", "error")
  }
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
