import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const AgregarProductos = () => {
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
        <h2>Producto</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='codigo' type='text' {...register('codigo', { required: true })} />
            {errors.codigo?.type === 'required' && alertaCampo()}
            <label>Codigo</label>
          </div>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombre</label>
          </div>
          <div className='user-box'>
            <input name='descripcion' type='text' {...register('descripcion', { required: true })} />
            {errors.descripcion?.type === 'required' && alertaCampo()}
            <label>DPI</label>
          </div>
          <div className='user-box'>
            <select {...register('id_marca')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>            
            {errors.id_marca?.type === 'required' && alertaCampo()}
            <label>Marca</label>
          </div>
          <div className='user-box'>
            <select {...register('id_categoria')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>            
            {errors.id_categoria?.type === 'required' && alertaCampo()}
            <label>Categoria</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
