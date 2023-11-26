import React, { useState } from "react";
import axios from "axios";



var existe;
function viaje(){
window.location.href="/home";
}

function Agregar_usuario()
{

    const[email, setemail]=useState("Correo");
    const[usuario, setuser]=useState("Usuario");
    const[contraseña, setcontraseña]=useState("Contraseña");



    function agregar_Usuario(){
        const instance= axios.create({
            baseURL: 'http://localhost:5000',
            headers: {
  
                'Content-Type': 'application/json',
              
              }
            
        })

    var user= 
    {
    email: email,
    usuario: usuario,
    contraseña: contraseña
    
        }
        console.log(user);

    instance.post('/agregar_usuario',user).then(({data})=>existe=data).catch(err =>(console.log(err)))    
       if(existe==="existe"){
        alert("Este usuario ya existe");
       }
   else{alert("Usuario agregado")}
    }

        

return(
    <div className="container mt-5">
      <button className="btn btn-danger position-absolute top-0 start-0" onClick={viaje}>
    Volver
  </button>
    <div className="row">
      <div className="col-sm-6 offset-md-3">
        <h2>Agregar Usuario</h2>

        

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            value={usuario}
            onChange={(e) => setuser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setcontraseña(e.target.value)}
          />
        </div>

        <button  className="btn btn-primary" onClick={ agregar_Usuario}>
          Agregar usuario
        </button>
      </div>
    </div>
  </div>
);
};



export default Agregar_usuario;