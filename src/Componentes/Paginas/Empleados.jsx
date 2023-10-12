import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const Empleados = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
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
        <h2>Empleados</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name="" type='text' {...register('nombres', { required: true })} />
            {errors.nombres?.type === 'required' && alertaCampo()}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input type='text' {...register('apellidos', { required: true })} />
            {errors.apellidos?.type === 'required' && alertaCampo()}
            <label>Apellidos</label>
          </div>
          <div className='user-box'>
            <input type='text' {...register('dpi', { required: true })} />
            {errors.dpi?.type === 'required' && alertaCampo()}
            <label>Número de Identificación</label>
          </div>
          <div className='user-box'>
            <input type='text' {...register('telefono', { required: true })} />
            {errors.telefono?.type === 'required' && alertaCampo()}
            <label>Telefono</label>
          </div>
          <div className='user-box'>
            <input type='text' {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && alertaCorreo()}
            <label>E-mail</label>
          </div>
          <div className='user-box'>
            <input type='text' {...register('direccion', { required: true })} />
            {errors.direccion?.type === 'required' && alertaCampo()}
            <label>Dirección</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
