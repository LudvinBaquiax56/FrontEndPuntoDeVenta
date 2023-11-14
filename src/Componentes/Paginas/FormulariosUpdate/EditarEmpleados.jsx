import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EditarEmpleados = () => {
  const { id } = useParams();
  const [dpi, setDpi] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');

  const [dpiOriginal, setDpiOriginal] = useState('');
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [apellidoOriginal, setApellidoOriginal] = useState('');
  const [telefonoOriginal, setTelefonoOriginal] = useState('');
  const [emailOriginal, setEmailOriginal] = useState('');
  const [direccionOriginal, setDireccionOriginal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/empleado/findById/${id}`);
        setDpi(response.data.dpi);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setTelefono(response.data.telefono);
        setEmail(response.data.email);
        setDireccion(response.data.direccion);

        setDpiOriginal(response.data.dpi);
        setNombreOriginal(response.data.nombre);
        setApellidoOriginal(response.data.apellido);
        setTelefonoOriginal(response.data.telefono);
        setEmailOriginal(response.data.email);
        setDireccionOriginal(response.data.direccion);
      } catch (error) {
        swal("Error", "Error", "error");
        console.error('Error en el servidor', error);
      }
    };
    fetchData();
  }, [id]);

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const datosActualizados = {
        id: id,
        dpi: data.dpi !== "" ? data.dpi : dpiOriginal,
        nombre: data.nombre !== "" ? data.nombre : nombreOriginal,
        apellido: data.apellido !== "" ? data.apellido : apellidoOriginal,
        telefono: data.telefono !== "" ? data.telefono : telefonoOriginal,
        email: data.email !== "" ? data.email : emailOriginal,
        direccion: data.direccion !== "" ? data.direccion : direccionOriginal,
        estado: 1
      };
      console.log(datosActualizados)

      const response = await axios.put('http://localhost:3000/empleado/update', datosActualizados);
      console.log('Respuesta del servidor:', response.data);
      swal({
        title: "Actualizado",
        text: "El empleado ha sido actualizado con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Empleados";
      });
    } catch (error) {
      swal("Error", "Error", "error");
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
        <h2>Empleados</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name="nombre" type='text' {...register('nombre')} value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre?.type === 'required' && alertaCampo('Nombre')}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input name='apellido' type='text' {...register('apellido')} value={apellido} onChange={(e) => setApellido(e.target.value)} />
            {errors.apellido?.type === 'required' && alertaCampo('Apellido')}
            <label>Apellidos</label>
          </div>
          <div className='user-box'>
            <input name='dpi' type='text' {...register('dpi')} value={dpi} onChange={(e) => setDpi(e.target.value)} />
            <label>DPI</label>
          </div>
          <div className='user-box'>
            <input name='telefono' type='text' {...register('telefono')} value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <label>Telefono</label>
          </div>
          <div className='user-box'>
            <input name='email' type='text' {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email?.type === 'pattern' && alertaCorreo()}
            <label>E-mail</label>
          </div>
          <div className='user-box'>
            <input name='direccion' type='text' {...register('direccion')} value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            <label>Dirección</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
