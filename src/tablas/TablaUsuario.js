import React from "react";

const TablaUsuario = () =>(
    <table>
    <thead>
      <tr>
        <th>Nombres</th>
        <th>Usuario</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nombre datos</td>
        <td>Usuario datos</td>
        <td>
          <button className="button muted-button">Editar</button>
          <button className="button muted-button">Borrar</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default TablaUsuario;