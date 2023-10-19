import "./Formulario.css"
import Texto from "../Texto/Texto.js"

const Formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
            <Texto titulo="Rango" placeholder="Ingresar rango"/>
            <Texto titulo="Foto" placeholder="Ingresar foto"/>
        </form>
    </section>
}

export  default Formulario