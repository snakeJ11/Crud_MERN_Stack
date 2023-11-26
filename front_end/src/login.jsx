import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";


import './App.css'
var respuestaServidor;
var valor="invitado";



function viaje(){
  localStorage.clear()
  localStorage.setItem("user", valor);
  window.location.href = "/home";
  
}

function Login() {


const[email, setuser]=useState("");
const[contraseña, setcontraseña]=useState("");



;

async function logear() {
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
    });

    var user = {
        email: email,
        contraseña: contraseña,
    };

    await instance.post('/login', user)
        .then(({ data }) => {
             respuestaServidor = data;
           
        })
        .catch(err => console.log(err));

if(respuestaServidor=="Usuario no encontrado"){
    alert("Usuario no encontrado");
}


else {
  valor=respuestaServidor.usuario;

  const mandar=valor;
 
  localStorage.clear()
  localStorage.setItem("user", mandar);
  window.location.href = '/home';
 

 }

 
}


    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <h2>Login</h2>
  
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
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
  
              <button type="button" onClick={logear} className="btn btn-success">
                Iniciar Sesión
              </button>
  
              <Link to="/agregar_usuario" className="btn btn-primary ms-2">
                Agregar Usuarios
              </Link>
  
          <button  type="button" onClick={viaje} className="btn btn-primary ms-2">
                Iniciar como Invitado
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
 
export function getRespuestaServidor() {
    return valor;
}
export default Login
