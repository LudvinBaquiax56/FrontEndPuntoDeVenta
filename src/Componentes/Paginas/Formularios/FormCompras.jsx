import React, { useState } from "react";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './forms.css'
import './ventaCompra.css'

export const AgregarCompras = () => {
  const [data, setData] = useState([{ no_factura:"", id_producto:"", codigo: "", producto: "", descripcion: "", precio: "", costo:"", cantidad: "", subtotal: "" }])

  const handleClick = () => {
    setData([...data, { no_factura:"",id_producto:"", codigo: "", producto: "", descripcion: "", precio: "", costo:"", cantidad: "", subtotal: "" }])
  }
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
                <input className="elementos-derecha" id="no_factura" name="no_factura" type='text' />
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
                <input className="elementos-derecha" id="sucursal" name="sucursal" type='text' />
                <input type="hidden" id="id_sucursal" name="id_sucursal"></input>
              </td>
            </tr>
            <tr>
              <td className="columna-izquierda">
                <label for='proveedor'>Proveedor</label><br></br>
                <input className="elementos-izquierda" id="proveedor" name="proveedor" type='text' />
                <input type="hidden" id="id_proveedor" name="id_proveedor"></input>
              </td>
              <td className="posicion-derecha">
                <label for="usuario">Usuario&emsp;</label>
                <input className="elementos-derecha" id="usuario" name="usuario" type='text' disabled />
                <input type="hidden" id="id_usuario" name="id_usuario"></input>
              </td>
            </tr>
          </table>
        </div>
        <br></br>
        <div>
          <table className="tabla-productos">
            <thead>
              <tr>
                <th className="columna-izquierda">Código</th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio Unitario</th>
                <th>Costo Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((val, i) =>
                  <tr>
                    <input type="hidden" name="id_producto" id="id_producto"/>
                    <input type="hidden" name="costo" id="costo"/>
                    <td><input id="codigo" name="codigo" value={val.codigo} onChange={(e) => handleChange(e, i)} /></td>
                    <td><input id="producto" name="producto" value={val.producto} onChange={(e) => handleChange(e, i)} /></td>
                    <td><input id="descripcion" name="descripcion" value={val.descripcion} onChange={(e) => handleChange(e, i)} /></td>
                    <td><input id="precio" name="precio" value={val.precio} onChange={(e) => handleChange(e, i)} /></td>
                    <td><input id="costo" name="costo" value={val.costo} onChange={(e) => handleChange(e, i)} /></td>
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
        <input className="button-37" type="submit" value="Confirmar"></input>
    </main>
  )
}
