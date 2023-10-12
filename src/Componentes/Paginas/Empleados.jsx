import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

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
    <main className='main-container'>
      <div className='main-title'>
        <h3>Empleados</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nombres</label>
            <input type='text' {...register('nombres', { required: true })} />
            {errors.nombres?.type === 'required' && alertaCampo()}
          </div>
          <div>
            <label>Apellidos</label>
            <input type='text' {...register('apellidos', { required: true })} />
            {errors.apellidos?.type === 'required' && alertaCampo()}
          </div>
          <div>
            <label>Número de Identificación</label>
            <input type='text' {...register('dpi', { required: true })} />
            {errors.dpi?.type === 'required' && alertaCampo()}
          </div>
          <div>
            <label>Telefono</label>
            <input type='text' {...register('telefono', { required: true })} />
            {errors.telefono?.type === 'required' && alertaCampo()}
          </div>
          <div>
            <label>E-mail</label>
            <input type='text' {...register('email', { required: true }, {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && alertaCorreo()}
            {errors.email?.type === 'required' && alertaCampo()}
          </div>
          <div>
            <label>Dirección</label>
            <input type='text' {...register('direccion', { required: true })} />
            {errors.direccion?.type === 'required' && alertaCampo()}
          </div>
          <input type='submit' value="Enviar" />
        </form>
      </div>
    </main>
  )
}
