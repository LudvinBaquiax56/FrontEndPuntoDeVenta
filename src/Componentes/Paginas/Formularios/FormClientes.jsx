import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';
import axios from 'axios';

export const AgregarClientes = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post('http://localhost:3000/cliente/create', data);
      console.log('Respuesta del servidor:', response.data);

      swal({
        title: "Registrado",
        text: "El cliente ha sido registrado con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Clientes";
      });

    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
      swal("Error", "Error", "error")
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
        <h2>Clientes</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name="nombre" type='text' {...register('nombre', { required: true })} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input name='apellido' type='text' {...register('apellido', { required: true })} />
            {errors.apellido?.type === 'required' && alertaCampo()}
            <label>Apellidos</label>
          </div>
          <div className='user-box'>
            <input name='nit' type='text' {...register('nit', { required: true })} />
            {errors.telefono?.type === 'required' && alertaCampo()}
            <label>NIT</label>
          </div>
          <div className='user-box'>
            <input name='dpi' type='text' {...register('dpi')} />
            <label>DPI</label>
          </div>
          <div className='user-box'>
            <input name='telefono' type='text' {...register('telefono')} />
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
