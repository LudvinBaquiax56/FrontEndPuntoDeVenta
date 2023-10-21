import "./App.css";
import SideBar2 from "./Componentes/SideBar2";
import Home from "./Componentes/Home";
import Header from "./Componentes/Header";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Empleados, AjusteInventario, Categorias, Compras, Marcas, Productos, Proveedores, Reportes, Ventas, Usuarios, Inicio } from "./Componentes/Paginas";
import { AgregarMarcas, AgregarProveedores, AgregarAjusteInventario, AgregarCategorias, AgregarClientes, AgregarCompras, AgregarEmpleados, AgregarProductos, AgregarVentas, AgregarUsuario } from "./Componentes/Paginas";
import { EditarMarcas, EditarProveedores, EditarCategorias, EditarClientes, EditarEmpleados, EditarProductos, EditarUsuario } from "./Componentes/Paginas";
import { Clientes } from "./Componentes/Paginas";

function App() {
  //Constantes para desplegar menu
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar2 openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        {/*Paginas principales*/}
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/Clientes' element={<Clientes />}></Route>
        <Route path='/AjusteInventario' element={<AjusteInventario />}></Route>
        <Route path='/Categorias' element={<Categorias />}></Route>
        <Route path='/Compras' element={<Compras />}></Route>
        <Route path='/Empleados' element={<Empleados />}></Route>
        <Route path='/Marcas' element={<Marcas />}></Route>
        <Route path='/Productos' element={<Productos />}></Route>
        <Route path='/Proveedores' element={<Proveedores />}></Route>
        <Route path='/Reportes' element={<Reportes />}></Route>
        <Route path='/Ventas' element={<Ventas />}></Route>
        <Route path='/Usuarios' element={<Usuarios />}></Route>

        {/*Formularios para agregar*/}
        <Route path='/AgregarMarca' element={<AgregarMarcas />}></Route>
        <Route path='/AgregarProveedor' element={<AgregarProveedores />}></Route>
        <Route path='/CrearAjusteInventario' element={<AgregarAjusteInventario />}></Route>
        <Route path='/AgregarCategoria' element={<AgregarCategorias />}></Route>
        <Route path='/AgregarCliente' element={<AgregarClientes />}></Route>
        <Route path='/RealizarCompra' element={<AgregarCompras />}></Route>
        <Route path='/AgregarEmpleado' element={<AgregarEmpleados />}></Route>
        <Route path='/CrearProducto' element={<AgregarProductos />}></Route>
        <Route path='/AgregarUsuario' element={<AgregarUsuario />}></Route>
        <Route path='/RealizarVenta' element={<AgregarVentas />}></Route>

        {/*Formularios para editar*/}
        <Route path='/EditarMarca/:id' element={<EditarMarcas />}></Route>
        <Route path='/EditarProveedor/:id' element={<EditarProveedores />}></Route>
        <Route path='/EditarCategoria/:id' element={<EditarCategorias />}></Route>
        <Route path='/EditarCliente/:id' element={<EditarClientes />}></Route>
        <Route path='/EditarEmpleado/:id' element={<EditarEmpleados />}></Route>
        <Route path='/EditarProducto/:id' element={<EditarProductos />}></Route>
        <Route path='/EditarUsuario/:id' element={<EditarUsuario />}></Route>
      </Routes>
    </div>
  );
}

export default App;
