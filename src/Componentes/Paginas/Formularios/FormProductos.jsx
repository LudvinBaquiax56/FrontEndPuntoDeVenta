import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css';

export const AgregarProductos = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener las opciones de "Marca" y "Categoría" desde el servidor.
    axios.get('http://localhost:3000/marca/find')
      .then((response) => setMarcas(response.data))
      .catch((error) => console.error('Error al obtener las marcas', error));

    axios.get('http://localhost:3000/categoria/find')
      .then((response) => setCategorias(response.data))
      .catch((error) => console.error('Error al obtener las categorías', error));
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/producto/create', data);
      console.log('Respuesta del servidor:', response.data);

      swal({
        title: "Registrado",
        text: "El producto ha sido registrado con éxito",
        type: "success"
      }).then(function () {
        window.location = "/Productos";
      });

    } catch (error) {
      swal("Error", "Error", "error")
      console.error('Error al enviar datos al backend:', error);
    }
  };
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
            <input name='descripcion' type='text' {...register('descripcion')} />
            <label>Descripcion</label>
          </div>
          <div className='user-box'>
            <label>Marca</label><br></br>
            <select className='classic' {...register('id_marca', { required: true })}>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>
                  {marca.nombre}
                </option>
              ))}
            </select>
            {errors.id_marca?.type === 'required' && alertaCampo()}
          </div>
          <br></br>
          <div className='user-box'>
            <label>Categoria</label><br></br>
            <select className='classic' {...register('id_categoria', { required: true })}>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            {errors.id_categoria?.type === 'required' && alertaCampo()}
          </div>
          <br></br>
          <input className='button-36' type='submit' value="Enviar" /><br></br>
        </form>
      </div>
    </main>
  )
}
