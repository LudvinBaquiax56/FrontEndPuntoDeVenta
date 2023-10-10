import { Route, Routes } from "react-router-dom";
import "./AppEmpleados.css";


function AppEmpleados() {
  return (
    <div className="AppEmpleados">
      <Routes>
      <Route path="/" element={<Inicio/>}/>
        <Route path="/Empleados" element={<Empleados/>}/>
        <Route path="/Usuarios" element={<Usuarios/>}/>
        <Route path="/Roles" element={<Roles/>}/>
      </Routes>
    </div>
  );
}

export default AppEmpleados;