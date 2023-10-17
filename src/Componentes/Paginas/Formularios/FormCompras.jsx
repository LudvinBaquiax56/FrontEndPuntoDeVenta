import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const AgregarCompras = () => {
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
        <h3>Compras</h3>
      </div>
      <div>
        Hola bro
      </div>
    </main>
  )
}
