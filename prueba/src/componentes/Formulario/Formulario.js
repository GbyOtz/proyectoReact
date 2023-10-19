import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones" //ya no se indica el index.js porque se reconoce de forma automatica

const Formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar rango"/>
            <Texto titulo="Foto" placeholder="Ingresar foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export  default Formulario