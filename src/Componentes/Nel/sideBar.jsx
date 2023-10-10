import { useState } from 'react'
import './sideBar.css'

function SideBar() {
    return (
        <>
            <nav class="main-menu">
                <div><img class="logo" src='./src/img/user.png' /></div>
                <div class="scrollbar" id="style-1">
                    <ul>
                        <li>
                            <a href="">
                                <i className='fa fa-home fa-lg'></i>
                                <span class="nav-text">Inicio</span>
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <i class="fa fa-user fa-lg"></i>
                                <span class="nav-text">Perfil</span>
                            </a>
                        </li>
                        <li class="darkerlishadow">
                            <a href="">
                                <i class="fa fa-store fa-lg"></i>
                                <span class="nav-text">Ventas</span>
                            </a>
                        </li>
                        <li class="darkerli">
                            <a href="">
                                <i class="fa fa-shopping-cart fa-lg"></i>
                                <span class="nav-text">Compras</span>
                            </a>
                        </li>

                        <li class="darkerli">
                            <a href="">
                                <i class="fa fa-boxes fa-lg"></i>
                                <span class="nav-text">Productos</span>
                            </a>
                        </li>

                        <li class="darkerli">
                            <a href="">
                                <i class="fa fa-pen"></i>
                                <span class="nav-text">Inventario</span>
                            </a>
                        </li>

                        <li class="darkerli">
                            <a href="ModuloEmpleados.html">
                                <i class="fa fa-id-card fa-lg"></i>
                                <span class="nav-text">Empleados</span>
                            </a>
                        </li>
                        <li class="darkerlishadowdown">
                            <a href="">
                                <i class="fa fa-file-alt fa-lg"></i>
                                <span class="nav-text">Reportes</span>
                            </a>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="http://startific.com">
                                <i class="fa fa-sign-out-alt fa-lg"></i>
                                <span class="nav-text">
                                    Cerrar Sesión
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default SideBar