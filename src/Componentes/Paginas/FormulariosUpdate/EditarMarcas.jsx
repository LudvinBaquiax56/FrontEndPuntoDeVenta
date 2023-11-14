import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const EditarMarcas = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Guarda los valores originales en el estado
  const [nombreOriginal, setNombreOriginal] = useState('');
  const [descripcionOriginal, setDescripcionOriginal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/marca/findById/${id}`);
        setNombre(response.data.nombre);
        setNombreOriginal(response.data.nombre); // Guarda el valor original
        setDescripcion(response.data.descripcion);
        setDescripcionOriginal(response.data.descripcion); // Guarda el valor original
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
        nombre: data.nombre !== "" ? data.nombre : nombreOriginal,
        descripcion: data.descripcion !== "" ? data.descripcion : descripcionOriginal
      };
      console.log(datosActualizados)

      const response = await axios.put('http://localhost:3000/marca/update', datosActualizados);
      console.log('Respuesta del servidor:', response.data);
      swal({
        title: "Actualizada",
        text: "La marca ha sido actualizada con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Marcas";
      });
    } catch (error) {
      swal("Error", "Error", "error");
      console.error('Error al enviar datos al backend:', error);
    }
  };

  const alertaCampo = () => {
    swal("Error", "Campo requerido", "error")
  }

  return (
    <main className='form-box center main-container'>
      <div className='main-title'>
        <h2>Editar Marca</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='user-box'>
            <input name='nombre' type='text' {...register('nombre')} value={nombre} onChange={(e) => setNombre(e.target.value)} />
            {errors.nombre?.type === 'required' && alertaCampo()}
            <label>Nombre</label>
          </div>
          <div className='user-box'>
            <input name='descripcion' type='text' {...register('descripcion')} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            {errors.descripcion?.type === 'required' && alertaCampo()}
            <label>Descripcion</label>
          </div>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  );
};
