import './ghost.css'
import {useState} from 'react'

const ghost=(props)=>{
    console.log(props)
    return <section className='ghostSection'>
        <h2 className='title'>Mis Personajes</h2>
        <img src='/img/boton.png' alt='add' onClick={}></img>
    </section>
}

export default ghost;