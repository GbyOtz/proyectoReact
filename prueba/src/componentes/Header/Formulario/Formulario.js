import "./Formulario.css"
import Texto from "../../Texto/Texto.js"

const Formulario=()=>{
    return <section className="formulario">
        <form>
            <h2>RELLENA EL FORMULARIO PARA CREAR UN NUEVO PERSONAJE</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"/>
        </form>
    </section>
}