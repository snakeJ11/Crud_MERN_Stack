import React, { useState } from "react";
import axios  from "axios";


const user = localStorage.getItem('user');
function viaje(){
  window.location.href = "/home";
  
}



function Publicar()
{
  const usuario=user;
  const[comentario,setcoment]=useState("")
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);

  };
    const handleUpload = async () => {
      const formData = new FormData();
      formData.append("usuario", usuario);
      formData.append("comentario", comentario);
      formData.append("archivo", selectedImage);



   
      alert("Publicacion agregada");
      try {
        // Enviar la imagen al servidor de Node.js
        
        const response = await axios.post('http://localhost:5000/upload', formData);
  
        // La respuesta podría contener la URL de la imagen en Firebase


        
        window.location.reload();
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
     
    };
  

    return(
      
<div className="container-fluid h-100 position-relative">
  <button className="btn btn-danger position-absolute top-0 start-0" onClick={viaje}>
    Volver
  </button>
  <div className="row h-100 justify-content-center align-items-center">
    <div className="col-md-6">
      <div className="form-group mb-3">
        <div className="d-flex justify-content-between align-items-center mb-3"></div>
        <h2>Descripcion</h2>
        <textarea
          className="form-control"
          rows="4"
          value={comentario}
          onChange={(e) => setcoment(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="imagen" className="form-label">
          <h2>Seleccionar Imagen</h2>
        </label>
      </div>

      <input type="file" accept="image/*" onChange={handleImageChange} className="form-control-file" />

      <div className="form-group text-center">
        <button className="btn btn-primary" onClick={handleUpload}>
          Subir publicacion
        </button>
      </div>
    </div>
  </div>
</div>


  );
};
    
export default Publicar;