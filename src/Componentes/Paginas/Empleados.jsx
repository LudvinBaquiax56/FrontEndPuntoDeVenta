import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'

export const Empleados = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Empleados</h3>
      </div>
      <div>
        <NavLink to="/AgregarEmpleado">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
        Hola bro
      </div>
    </main>
  )
}
