import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EditarProveedores = () => {
  const { id } = useParams();
  const [nit, setNit] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');

  const [nitOriginal, setNitOriginal] = useState('');
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [telefonoOriginal, setTelefonoOriginal] = useState('');
  const [emailOriginal, setEmailOriginal] = useState('');
  const [direccionOriginal, setDireccionOriginal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/proveedor/findById/${id}`);
        setNit(response.data.nit);
        setNombre(response.data.nombre);
        setTelefono(response.data.telefono);
        setEmail(response.data.email);
        setDireccion(response.data.direccion);

        setNitOriginal(response.data.nit);
        setNombreOriginal(response.data.nombre);
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
        nit: data.nit !== "" ? data.nit : nitOriginal,
        nombre: data.nombre !== "" ? data.nombre : nombreOriginal,
        telefono: data.telefono !== "" ? data.telefono : telefonoOriginal,
        email: data.email !== "" ? data.email : emailOriginal,
        direccion: data.direccion !== "" ? data.direccion : direccionOriginal,
        estado: 1
      };
      console.log(datosActualizados)

      const response = await axios.put('http://localhost:3000/proveedor/update', datosActualizados);
      console.log('Respuesta del servidor:', response.data);
      swal({
        title: "Actualizado",
        text: "El proveedor ha sido actualizado con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Proveedores";
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
        <h2>Proveedores</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name="nombre" type='text' {...register('nombre')} value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre?.type === 'required' && alertaCampo('Nombre')}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input name='nit' type='text' {...register('nit')} value={nit} onChange={(e) => setNit(e.target.value)} />
            {errors.telefono?.type === 'required' && alertaCampo('Nit')}
            <label>NIT</label>
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
