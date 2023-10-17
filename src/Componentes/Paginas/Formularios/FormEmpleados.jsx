import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const Empleados = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const alertaCorreo = () => {
    swal("Error", "Formato de correo no valido", "error")
  }
  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }

  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Empleados</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input name='apellido' type='text' {...register('apellido', { required: true })} />
            {errors.apellido?.type === 'required' && alertaCampo()}
            <label>Apellidos</label>
          </div>
          <div className='user-box'>
            <input name='dpi' type='text' {...register('dpi', { required: true })} />
            {errors.dpi?.type === 'required' && alertaCampo()}
            <label>DPI</label>
          </div>
          <div className='user-box'>
            <input name='telefono' type='text' {...register('telefono', { required: true })} />
            {errors.telefono?.type === 'required' && alertaCampo()}
            <label>Telefono</label>
          </div>
          <div className='user-box'>
            <input name='email' type='text' {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && alertaCorreo()}
            <label>E-mail</label>
          </div>
          <div className='user-box'>
            <input name='direccion' type='text' {...register('direccion', { required: true })} />
            {errors.direccion?.type === 'required' && alertaCampo()}
            <label>Dirección</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
