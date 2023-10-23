
import {useState} from 'react'
import './componentes/Header/Header.js';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Ghost from './componentes/Ghost/Ghost.js';

function App() {
  //const[variable,setvariable]=useState("valor inicial")
  const [mostrarFormulario, actualizarFormulario]=useState(true)

  const cambiarMostrar=()=>{
    actualizarFormulario(!mostrarFormulario)
  }
  return ( 
    <div>
      <Header/>
      {mostrarFormulario && <Formulario/>}
      <Ghost cambiarMostrar={cambiarMostrar}></Ghost>
     
    </div>
    
  );
}

export default App;
