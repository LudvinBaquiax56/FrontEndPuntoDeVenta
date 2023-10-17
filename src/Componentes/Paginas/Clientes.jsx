import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const Clientes = () => {
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
        <h3>Clientes</h3>
      </div>
      <div>
        Hola bro
      </div>
    </main>
  )
}
