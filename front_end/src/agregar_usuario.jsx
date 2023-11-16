import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
function Agregar_usuario()
{

const[nombre, setnombre]=useState("");
const[email, setemail]=useState("");
const[telefono, settelefono]=useState("");



    function agregar_Usuario(){
        const instance= axios.create({
            baseURL: 'http://localhost:5000',
            headers: {
  
                'Content-Type': 'application/json',
              
              }
            
        })

    var user= 
    {
    nombre: nombre,
    email: email,
    telefono: telefono,
    IDuser: uniqid()
        }
        console.log(user);
    instance.post("/api/user/agregar_usuario",user).then(({data})=>data).catch(err =>(console.log(err)))

       
    }

        

return(
    <><div className="container">
        <div className="row">

            <h2>Agregar Usuario</h2>


        </div>

   
            <div className="row">
                <div className="col-sm-6 offset-3">
    <label htmlFor="Nombre">Nombre</label>
<input type="text" className="form-control" value={nombre} onChange={(e)=>{setnombre(e.target.value)}}/>

                </div>
                <div className="col-sm-6 offset-3">
        <label htmlFor="email">Correo electronico</label>
        <input type="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            
                </div>
                <div className="col-sm-6 offset-3">
        <label htmlFor="Numero">Telefono</label>
        <input type="text" className="form-control" value={telefono} onChange={(e)=>{settelefono(e.target.value)}}/>
            
                </div>

            </div>

<button onClick={agregar_Usuario} className="btn btn-success">Guardar Usuario</button>

        </div></>


)
    
}

export default Agregar_usuario;