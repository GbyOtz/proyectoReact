import './ghost.css'
import Anime from '../Anime'
import Serie from '../Series'
import Peliculas from '../Peliculas'
import Fantasia from '../Fantasia'
import Redes from '../Redes'
import Historias from '../Historias'

const Ghost=(props)=>{
    console.log(props)
    return <div>
        <section className='ghostSection'>
            <h2 className='title'>Mis Personajes</h2>
            <img src='/img/boton.png' alt='add' onClick={props.cambiarMostrar}></img>  
        </section>
        <Anime></Anime>
        <Serie></Serie>
        <Peliculas></Peliculas>
        <Fantasia></Fantasia>
        <Redes></Redes>
        <Historias></Historias>
        </div>
}

export default Ghost;