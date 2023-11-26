
import Mural from "./mural"; 
import Agregar_usuario from "./agregar_usuario"; 
import Publicar from "./publicar"; 
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
<Route path='/publicar' element={<Publicar/>} exact> </Route>
<Route path='/home' element={<Mural/>} exact> </Route>



</Routes>
</BrowserRouter>

      </div>
      
    </>
  )
}

export default App