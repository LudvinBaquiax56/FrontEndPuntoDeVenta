import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EditarClientes = () => {
  const { id } = useParams();
  const [dpi, setDpi] = useState('');
  const [nit, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [puntos, setPuntos] = useState('');

  const [dpiOriginal, setDpiOriginal] = useState('');
  const [nitOriginal, setNitOriginal] = useState('');
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [apellidoOriginal, setApellidoOriginal] = useState('');
  const [telefonoOriginal, setTelefonoOriginal] = useState('');
  const [emailOriginal, setEmailOriginal] = useState('');
  const [direccionOriginal, setDireccionOriginal] = useState('');
  const [puntosOriginal, setPuntosOriginal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cliente/findById/${id}`);
        setDpi(response.data.dpi);
        setNit(response.data.nit);
        setNombre(response.data.nombre);
        setApellido(response.data.apellido);
        setTelefono(response.data.telefono);
        setEmail(response.data.email);
        setDireccion(response.data.direccion);
        setPuntos(response.data.puntos_privilegio);

        setDpiOriginal(response.data.dpi);
        setNitOriginal(response.data.nit);
        setNombreOriginal(response.data.nombre);
        setApellidoOriginal(response.data.apellido);
        setTelefonoOriginal(response.data.telefono);
        setEmailOriginal(response.data.email);
        setDireccionOriginal(response.data.direccion);
        setPuntosOriginal(response.data.puntos_privilegio);
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
        nit: data.nit !== "" ? data.nit : nitOriginal,
        nombre: data.nombre !== "" ? data.nombre : nombreOriginal,
        apellido: data.apellido !== "" ? data.apellido : apellidoOriginal,
        telefono: data.telefono !== "" ? data.telefono : telefonoOriginal,
        email: data.email !== "" ? data.email : emailOriginal,
        direccion: data.direccion !== "" ? data.direccion : direccionOriginal,
        puntos_privilegio: data.puntos_privilegio !== "" ? data.puntos_privilegio : puntosOriginal,
        estado: 1
      };
      console.log(datosActualizados)

      const response = await axios.put('http://localhost:3000/cliente/update', datosActualizados);
      console.log('Respuesta del servidor:', response.data);
      swal("Actualizado", "La marca ha sido actualizada con éxito", "success");
    } catch (error) {
      swal("Error", "Error", "error");
      console.error('Error al enviar datos al backend:', error);
    }
  };
  const alertaCorreo = () => {
    swal("Error", "Formato de correo no valido", "error")
  }
  const alertaCampo = (mensaje) => {
    swal("Error", "Campo requerido" + mensaje, "error")
  }

  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Clientes</h2>
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
            <input name='nit' type='text' {...register('nit')} value={nit} onChange={(e) => setNit(e.target.value)} />
            {errors.telefono?.type === 'required' && alertaCampo('Nit')}
            <label>NIT</label>
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
          <div className='user-box'>
            <input name='puntos_privilegio' type='text' {...register('puntos_privilegio')} value={puntos} onChange={(e) => setPuntos(e.target.value)} />
            <label>Puntos Privilegio</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}