import React from "react";
function Usuario_info({usuario} ){
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-6 offset-3">
        <ul className="list-group">
          <li className="list-group-item">{usuario.nobre}</li>
          <li className="list-group-item">{usuario.email}</li>
          <li className="list-group-item">{usuario.IDuser}</li>
          <li className="list-group-item">{usuario.telefono}</li>

        </ul>

        < button className="btn btn-success">Editar</button>
        < button className="btn btn-danger">Borrar</button>
        </div>
      </div>
      
    </div>
  );
}

export default Usuario_info;