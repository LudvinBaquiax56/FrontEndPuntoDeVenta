import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

export const AgregarSucursal = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/sucursal/create', data);
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
        <h2>Sucursal</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombre</label>
          </div>
          <div className='user-box'>
            <input name='no_sucursal' type='text' {...register('no_sucursal', { required: true })} />
            {errors.nit?.type === 'required' && alertaCampo()}
            <label>Numero Sucursal</label>
          </div>
          <div className='user-box'>
            <input name='telefono' type='text' {...register('telefono', { required: true })} />
            {errors.telefono?.type === 'required' && alertaCampo()}
            <label>Telefono</label>
          </div>
          <div className='user-box'>
            <input name='ubicacion' type='text' {...register('ubicacion')} />
            <label>Ubicacion</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div >
    </main >
  );
};
