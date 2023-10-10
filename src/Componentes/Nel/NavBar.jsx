import { useState } from 'react'
import './NavBar.css'
import './sideBar.css'
import {Link, NavLink} from "react-router-dom"


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav>
                <Link to="/" className='title'>Inicio</Link>
                <div className='menu' onClick={() =>  {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/Empleados">Empleados</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Usuarios">Usuarios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Roles">Roles</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
