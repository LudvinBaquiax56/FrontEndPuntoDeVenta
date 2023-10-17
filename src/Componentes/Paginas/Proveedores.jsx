import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Proveedores = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Proveedores</h3>
      </div>
      <div>
        <NavLink to="/AgregarProveedor">
          <input className='button-35' type='button' value="Nuevo" />
        </NavLink>
      </div>
    </main>
  )
}
