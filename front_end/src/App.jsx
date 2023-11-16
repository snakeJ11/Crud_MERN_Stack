import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lista_usuarios from "./lista_usuarios"; 
import Agregar_usuario from "./agregar_usuario"; 
import Editar_usuario from "./editar_usuario"; 
import {BrowserRouter,Routes,Route} from "react-router-dom"; 

import './App.css'


function App() {
    return (
    <>
  <div className='app'>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">CRUD MERN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
      <a className="nav-link" href="agregar_usuario">Agregar usuarios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<BrowserRouter>
<Routes>

<Route path='/' element={<Lista_usuarios/>} exact> </Route>
<Route path='/agregar_usuario' element={<Agregar_usuario/>} exact> </Route>
<Route path='/editar_usuario' element={<Editar_usuario/>} exact> </Route>
</Routes>
</BrowserRouter>

      </div>
      
    </>
  )
}

export default App
