import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Clientes = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Clientes</h3>
      </div>
      <div>
        <NavLink to="/AgregarCliente">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
    </main>
  )
}
