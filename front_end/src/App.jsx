
import Lista_usuarios from "./lista_usuarios"; 
import Agregar_usuario from "./agregar_usuario"; 
import Editar_usuario from "./editar_usuario"; 
import Login from "./login";
import {BrowserRouter,Routes,Route} from "react-router-dom"; 

import './App.css'


function App() {
    return (
    <>
  <div className='app'>



<BrowserRouter>
<Routes>

<Route path='/' element={<Login/>} exact> </Route>
<Route path='/agregar_usuario' element={<Agregar_usuario/>} exact> </Route>
<Route path='/publicar' element={<Editar_usuario/>} exact> </Route>
<Route path='/home' element={<Lista_usuarios/>} exact> </Route>



</Routes>
</BrowserRouter>

      </div>
      
    </>
  )
}

export default App