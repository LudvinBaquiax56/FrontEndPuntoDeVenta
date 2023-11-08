import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EditarSucursal = () => {
  const { id } = useParams();

  const [numero, setNumero] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const [numeroOriginal, setNumeroOrignal] = useState('');
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [telefonoOriginal, setTelefonoOriginal] = useState('');
  const [ubicacionOriginal, setUbicacionOriginal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/sucursal/findById/${id}`);
        setNumero(response.data.no_sucursal)
        setNombre(response.data.nombre);
        setTelefono(response.data.telefono);
        setUbicacion(response.data.ubicacion);

        setNumeroOrignal(response.data.no_sucursal)
        setNombreOriginal(response.data.nombre);
        setTelefonoOriginal(response.data.telefono);
        setUbicacionOriginal(response.data.ubicacion);
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
        no_sucursal: data.no_sucursal !== "" ? data.no_sucursal : numeroOriginal,
        nombre: data.nombre !== "" ? data.nombre : nombreOriginal,
        telefono: data.telefono !== "" ? data.telefono : telefonoOriginal,
        ubicacion: data.ubicacion !== "" ? data.ubicacion : ubicacionOriginal,
        estado: 1
      };
      console.log(datosActualizados)

      const response = await axios.put('http://localhost:3000/sucursal/update', datosActualizados);
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
  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }

  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Sucursales</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name="nombre" type='text' {...register('nombre')} value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre?.type === 'required' && alertaCampo('Nombre')}
            <label>Nombres</label>
          </div>
          <div className='user-box'>
            <input name='no_sucursal' type='text' {...register('no_sucursal')} value={numero} onChange={(e) => setNumero(e.target.value)} />
            {errors.nit?.type === 'required' && alertaCampo()}
            <label>Numero Sucursal</label>
          </div>
          <div className='user-box'>
            <input name='telefono' type='text' {...register('telefono')} value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <label>Telefono</label>
          </div>
          <div className='user-box'>
            <input name='ubicacion' type='text' {...register('ubicacion')} value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
            <label>Ubicacion</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
