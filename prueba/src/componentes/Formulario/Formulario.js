import { useState } from "react"
import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones" //ya no se indica el index.js porque se reconoce de forma automatica
import Boton from "../Boton/Boton.js"


/*const Formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar rango"/>
            <Texto titulo="Foto" placeholder="Ingresar foto"/>
            <ListaOpciones/>
            <boton>crear</boton>
        </form>
    </section>
} */

const Formulario=()=>{
    const[nombre, actualizarNombre]=useState("");
    const [rango, actualizarRango] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const envioDatos=(e)=>{
        e.preventDefault();
        console.log("envio",e)
        let  datosEnviar={
            nombre: nombre,
            rango: rango,
            foto: foto,
            equipo: equipo
        }
        console.log("datos enviados ", datosEnviar)
    }
    return <section className="formulario">
        <form onSubmit={envioDatos}>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto 
            titulo="Nombre" 
            placeholder="Ingresar nombre"
            valor={nombre}
            actualizarValor={actualizarNombre} 
            //required
            />
            <Texto 
            titulo="Rango" 
            placeholder="Ingresar rango" 
            valor={rango}
            actualizarValor={actualizarRango}
            //required
            />
            <Texto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            valor={foto}
            actualizarValor={actualizarFoto}
            //required
            />
            <ListaOpciones
            valor={equipo}
            actualizarValor={actualizarEquipo}/>
            <Boton>CREAR</Boton>
            
        </form>

    </section>
}


export  default Formulario;