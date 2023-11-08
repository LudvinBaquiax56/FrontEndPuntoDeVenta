import { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

//Iconos para el menu
import { BsFillCartFill, BsFillClipboard2DataFill, BsFillPersonVcardFill, BsFillGrid3X3GapFill, BsListCheck, BsFillPersonFill, BsShopWindow, BsReceiptCutoff, BsPersonFillAdd, BsFillBasket3Fill, } from 'react-icons/bs'

function SideBar2({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <div className="scrollbar" id="style-1">
                <ul className='sidebar-list'>
                    <li className='sidebar-list-title'>
                        SUCURSALES
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Sucursales"><BsPersonFillAdd className='icon' /> Sucursales</NavLink>
                    </li>

                    <li className='sidebar-list-title'>
                        VENTAS
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Clientes"><BsPersonFillAdd className='icon' /> Clientes</NavLink>

                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Ventas"><BsReceiptCutoff className='icon' /> Pedidos de Venta</NavLink>
                    </li>
                    <li className='sidebar-list-title'>
                        COMPRAS
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Proveedores"><BsPersonFillAdd className='icon' /> Proveedores</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Compras"><BsFillCartFill className='icon' /> Pedidos de Compra</NavLink>
                    </li>
                    <li className='sidebar-list-title'>
                        INVENTARIO
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Productos"><BsFillBasket3Fill className='icon' /> Productos</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Marcas"><BsShopWindow className='icon' /> Marcas</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Categorias"><BsFillGrid3X3GapFill className='icon' /> Categorías</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/AjusteInventario"><BsListCheck className='icon' /> Ajuste de Inventario</NavLink>
                    </li>
                    <li className='sidebar-list-title'>
                        EMPLEADOS
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Empleados"><BsFillPersonVcardFill className='icon' /> Empleados</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Usuarios"><BsFillPersonFill className='icon' /> Usuarios</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Roles"><BsPersonFillAdd className='icon' /> Roles</NavLink>
                    </li>
                    <li className='sidebar-list-item'>
                        <NavLink to="/Reportes"><BsFillClipboard2DataFill className='icon' /> Reportes</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar2