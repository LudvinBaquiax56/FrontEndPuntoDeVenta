import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const AgregarProveedores = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/proveedor/create', data);
      console.log('Respuesta del servidor:', response.data);

      swal({
        title: "Registrado",
        text: "El proveedor ha sido registrado con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Proveedores";
      });

    } catch (error) {
      swal("Error", "Error", "error")
      console.error('Error al enviar datos al backend:', error);
    }
  };


  const alertaCorreo = () => {
    swal("Error", "Formato de correo no valido", "error")
  }
  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }
  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Proveedores</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombre</label>
          </div>
          <div className='user-box'>
            <input name='nit' type='text' {...register('nit', { required: true })} />
            {errors.nit?.type === 'required' && alertaCampo()}
            <label>NIT</label>
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
            <input name='direccion' type='text' {...register('direccion')} />
            <label>Dirección</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
