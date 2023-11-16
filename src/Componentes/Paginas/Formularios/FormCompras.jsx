import React, { useState } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'
import './ventaCompra.css'

export const AgregarCompras = () => {
  const [data, setData] = useState([{ id_producto: "", codigo: "", producto: "", descripcion: "", precio: "", costo: "", cantidad: "", subtotal: "" }])

  const [id_usuario, setUsuario] = useState('');
  const [id_proveedor, setProveedor] = useState('');
  const [no_factura, setFactura] = useState('');

  const [datosProveedor, setProveedorC] = useState({
    nombre: '',
    id_provee: '',
  });

  const handleClick = async () => {
    setData([...data, { id_producto: "", codigo: "", producto: "", costo: "", descripcion: "", cantidad: "", subtotal: "" }])
    try {
      const response = await axios.get(`http://localhost:3000/producto/findbyid/${data[data.length - 1].codigo}`);
      console.log(response.data);
      const datosObtenidos = {
        id_producto: response.data.id,
        codigo: response.data.codigo,
        producto: response.data.nombre,
        costo: data[data.length - 1].costo,
        descripcion: data[data.length - 1].descripcion,
        cantidad: data[data.length - 1].cantidad,
        subtotal: data[data.length - 1].costo * data[data.length - 1].cantidad
      };
      setData(prevData => [...prevData, datosObtenidos]);

    } catch (error) {
      console.error('Error al buscar por NIT:', error);
    }
    console.log(data)
  }

  const handleChangeUsuario = (event) => {
    const nuevoUsuario = event.target.value;
    setUsuario(nuevoUsuario);
  };

  const handleChangeProveedor = (event) => {
    const nuevoProveedor = event.target.value;
    setProveedor(nuevoProveedor);
  };

  const handleBuscarProveedor = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/proveedor/findbyid/${id_proveedor}`);
      console.log(response.data);
      const datosObtenidos = {
        nombre: response.data.nombre,
        id_cliente: response.data.id,
      };
      setProveedorC(prevState => ({
        ...prevState,
        ...datosObtenidos,
      }));
      console.log(datosProveedor)
    } catch (error) {
      console.error('Error al buscar el proveedor:', error);
    }
  };
  const handleChangeFactura = (event) => {
    const factura = event.target.value;
    setFactura(factura);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target
    const onchangeVal = [...data]
    onchangeVal[i][name] = value
    setData(onchangeVal)
  }
  const handleDelete = (i) => {
    const deleteVal = [...data]
    deleteVal.splice(i, 1)
    setData(deleteVal)
  }

  const enviarDatos = async () => {
    console.log(datosProveedor)
    //Proveedor
    const jsonID = JSON.stringify({ id_proveedor: id_proveedor.toString() });
    const IDObject = JSON.parse(jsonID);
    //Usuario
    const jsonUsuario = JSON.stringify({ id_usuario: id_usuario.toString() })
    const usuarioObject = JSON.parse(jsonUsuario)
    //Factura
    const jsonFactura = JSON.stringify({ no_factura: no_factura.toString() })
    const facturaObject = JSON.parse(jsonFactura)

    const datosCombinados = { ...IDObject, ...usuarioObject, ...facturaObject };

    console.log(datosCombinados);

    try {
      console.log("Informacion")
      console.log(datosCombinados);
      console.log("data")
      console.log(data)
      console.log("--------------")
      const response = await axios.post('http://localhost:3000/compra/create', datosCombinados);
      console.log('Respuesta del servidor:', response.data);

      data.forEach(async function (elemento) {
        if (elemento.id != "") {
          const response = await axios.post('http://localhost:3000/detalleCompra/create', elemento)
          console.log(elemento);
        }
      });

      swal("Registrado", "La venta ha sido realizda con éxito", "success");

    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
      swal("Error", "Error", "error")
    }
  }

  return (
    <main className='main-container'>
      <div>
        <h1>Compra</h1>
      </div>
      <div>
        <table className="encabezado">
          <tr>
            <td></td>
            <td className="posicion-derecha">
              <label for='no_factura'>Factura # &emsp;</label>
              <input className="elementos-derecha" id="no_factura" onChange={handleChangeFactura} name="no_factura" type='text' />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="posicion-derecha">
              <label for='fecha'>Fecha &emsp;</label>
              <input className="elementos-derecha" id="fecha" name="fecha" type='date' />
            </td>
          </tr>
          <tr>
            <td className="columna-izquierda">
            </td>
            <td className="posicion-derecha">
              <label for='sucursal'>Sucursal &emsp;</label>
              <input className="elementos-derecha" id="sucursal" name="sucursal" type='text' disabled />
              <input type="hidden" id="id_sucursal" name="id_sucursal"></input>
            </td>
          </tr>
          <tr>
            <td className="columna-izquierda">
              <label for='proveedor'>Proveedor</label><br></br>
              <input className="elementos-izquierda" id="proveedor" name="proveedor" type='text' onChange={handleChangeProveedor} />
              <input type="hidden" id="id_proveedor" name="id_proveedor"></input>

              <button className="button-35" onClick={handleBuscarProveedor}>Buscar Proveedor</button>
            </td>
            <td className="posicion-derecha">
              <label for="usuario">Usuario&emsp;</label>
              <input className="elementos-derecha" id="usuario" name="usuario" type='text' onChange={handleChangeUsuario} />
              <input type="hidden" id="id_usuario" name="id_usuario"></input>
            </td>

          </tr>
          <td className="columna-izquierda">
            <label for='cliente'>Nombre</label><br></br>
            {datosProveedor && (
              <div>
                <input className="elementos-izquierda" id="cliente" name="cliente" type='text' disabled value={datosProveedor.nombre} />
                <input type="hidden" id="id_cliente" name="id_cliente" value={datosProveedor.id_provee}></input>
              </div>
            )}
          </td>
        </table>
      </div>
      <br></br>
      <div>
        <table className="tabla-productos">
          <thead>
            <tr>
              <th className="columna-izquierda">Código</th>
              <th>Producto</th>
              <th>Costo Unitario</th>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val, i) =>
                <tr>
                  <input type="hidden" name="id_producto" id="id_producto" />
                  <input type="hidden" name="costo" id="costo" />
                  <td><input id="codigo" name="codigo" value={val.codigo} onChange={(e) => handleChange(e, i)} /></td>
                  <td><input id="producto" name="producto" value={val.producto} onChange={(e) => handleChange(e, i)} /></td>
                  <td><input id="costo" name="costo" value={val.costo} onChange={(e) => handleChange(e, i)} /></td>
                  <td><input id="descripcion" name="descripcion" value={val.descripcion} onChange={(e) => handleChange(e, i)} /></td>
                  <td><input name="cantidad" value={val.cantidad} onChange={(e) => handleChange(e, i)} /></td>
                  <td><input name="subtotal" value={val.subtotal} onChange={(e) => handleChange(e, i)} /></td>
                  <td><button className="button-37" onClick={() => handleDelete(i)}>-</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
        <br></br>
        <button className="button-35" onClick={handleClick}>Agregar elemento</button>
        {/*<p>{JSON.stringify(data)}</p>*/}
      </div>
      <br></br>
      <table className="pie">
        <tr className="columna-izquierda">
          <td></td>
          <td className="posicion-derecha">
            <label for="total" >Total &emsp;</label>
            <input id="total" name="total" type='text' disabled />
          </td>
        </tr>
      </table>
      <br></br>
      <button className="button-37" onClick={enviarDatos}>Enviar Datos</button>
    </main>
  )
}
