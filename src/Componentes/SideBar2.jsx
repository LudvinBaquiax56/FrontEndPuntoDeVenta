import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

//Iconos para el menu
import { BsFillCartFill, BsFillClipboard2DataFill, BsFillPersonVcardFill, BsFillGrid3X3GapFill, BsListCheck, BsFillPersonFill, BsShopWindow, BsReceiptCutoff, BsPersonFillAdd, BsFillBasket3Fill } from 'react-icons/bs'

function SideBar2({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img className='icon' src="src\Img\vendedor1.png" />
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <div class="scrollbar" id="style-1">
                <ul className='sidebar-list'>
                    <li className='sidebar-list-title'>
                        VENTAS
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Clientes"><BsPersonFillAdd className='icon' /> Clientes</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Pedidos-de-Venta"><BsReceiptCutoff className='icon' /> Pedidos de Venta</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-title'>
                        COMPRAS
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Proveedores"><BsPersonFillAdd className='icon' /> Proveedores</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Pedidos-de-Compras"><BsFillCartFill className='icon' /> Pedidos de Compra</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-title'>
                        INVENTARIO
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Productos"><BsFillBasket3Fill className='icon' /> Productos</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Marcas"><BsShopWindow className='icon' /> Marcas</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Categorias"><BsFillGrid3X3GapFill className='icon' /> Categorías</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Ajuste-de-Inventario"><BsListCheck className='icon' /> Ajuste de Inventario</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-title'>
                        EMPLEADOS
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Empleados"><BsFillPersonVcardFill className='icon' /> Empleados</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Usuarios"><BsFillPersonFill className='icon' /> Usuarios</Link>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <Link to="/Reportes"><BsFillClipboard2DataFill className='icon' /> Reportes</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar2