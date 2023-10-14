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
            <select {...register('id_empleado')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>            
            {errors.id_empleado?.type === 'required' && alertaCampo()}
            <label>Empleado</label>
          </div>

          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
