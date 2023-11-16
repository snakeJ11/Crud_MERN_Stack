import React, { useEffect, useState } from "react";
import UsuarioInfo from "./usuario_info";
import axios from "axios";
function Lista_usuario()
{
    const instance= axios.create({
        baseURL: 'http://localhost:5000',
        headers: {

            'Content-Type': 'application/json',
          
          }
        
    })

    const[datausuario,setusuario]=useState([])

    useEffect(()=>{
        
        instance.get('api/user/obtenerusuarios').then(
            res=>{console.log(res.data) ; setusuario(res.data)}
            ).catch(err=>{console.log(err)})
    })


//mapeo
const Lista_usuario=datausuario.map(usuario =>
    {return (

        <div>
            <UsuarioInfo usuario={usuario}/>
        </div>
    )
    
    })

return(
<div>
    
    <h2>lista de usuarios</h2>
   {Lista_usuario}
</div>

)}

export default Lista_usuario;