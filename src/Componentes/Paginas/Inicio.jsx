import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';// Validar si usar boostrap
import './forms.css'

export const Inicio = () => {
  return (
    <main className='main-container'>
      <img className='inicio center' src='./src/Img/supermercado.png'/>
    </main>
  )
}
