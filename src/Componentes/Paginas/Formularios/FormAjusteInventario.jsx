import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const AgregarAjusteInventario = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }
  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Ajuste de Inventario</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='id_producto_sucursal' type='text' {...register('id_producto_sucursal', { required: true })} />
            {errors.id_producto_sucursal?.type === 'required' && alertaCampo()}
            <label>Producto</label>
          </div>
          <div className='user-box'>
            <input name='cantidadActual' type='number' disabled/>
            {errors.cantidadActual?.type === 'required' && alertaCampo()}
            <label>Cantidad Actual</label>
          </div>
          <div className='user-box'>
            <input name='cantidad' type='number' {...register('cantidad', { required: true })} />
            {errors.cantidad?.type === 'required' && alertaCampo()}
            <label>Cantidad Nueva</label>
          </div>
          <div className='user-box'>
            <input name='razon' type='text' {...register('razon', { required: true })} />
            {errors.razon?.type === 'required' && alertaCampo()}
            <label>Razón</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
