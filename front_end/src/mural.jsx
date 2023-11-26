import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";

const user = localStorage.getItem('user');
var publi="Nueva Publicacion";
var ruta="/publicar"
var boton="Cerra Seccion"
if(user==="invitado")
{
  publi="NO SE PUEDE PUBLICAR SIENDO INVITADO"; 
  ruta="#"
  boton="Iniciar seccion"

}

function viajar(){
 
    window.location.href = "/";
  
}

function Mural() {
  const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });

  const [pub, setpub] = useState([]);

  useEffect(() => {
    instance.get('/publicar')
      .then(res => {
        setpub(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  
  const listmuro = pub.map((item, index) => (
   
   <>
    <div
    
    key={index}
    style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '0px',
      marginTop: '30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      background: '#3498db', 
      padding: '15px',
      width: '50%',
      margin: '0 auto',
    }}
  >



    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <FontAwesomeIcon icon={faUser} style={{ fontSize: '24px', marginRight: '10px' }} />
    <span style={{ fontWeight: 'bold' }}>{item.usuario}</span>
  </div>

  <p style={{ marginBottom: '15px' }}>{item.comentario}</p>

  </div>
 
  
    
   
    <img
  src={item.url}
  alt="Imagen del comentario"
  style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '40px',

    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#fff', // Fondo blanco
    width: '50%', // Ancho ajustado, puedes ajustar según tus necesidades
    margin: '0 auto', // Centrado horizontalmente
  }}

/>  
<div><h1> </h1></div>
</>
    
  ));

  return (
    
    <>
      <div className='app'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">TUITEL</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

           
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={ruta}> {publi}</a>
                  </li>

                <li>
                  
                </li>
                
              </ul>
              <div>
                  <FontAwesomeIcon icon={faUser}style={{ fontSize: '24px', marginRight: '10px', color: 'white' }}/>
                  </div>
                  
                  <div className="nav-item">
  <a className="nav-link active" style={{ color: 'white' }}>{user}</a>
</div>


              <div className="d-flex align-items-center">
            <button onClick={viajar} className="btn btn-outline-light ms-3">
                  {boton}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <h1>Muro de Publicaciones</h1>
          <div>{listmuro}</div>
        </div>
      </div>

      {/* Agrega Font Awesome directamente aquí */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-ez1F3Cy7PTf2ZLAV+UV9ayt2H8eSkhuSKVA1vZ3b3IbbVc0amhIxC3HUUcHbIePV" crossOrigin="anonymous" />
    </>
  );
};

export default Mural;
