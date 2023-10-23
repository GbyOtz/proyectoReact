import "./ListaOpciones.css"
//se debe tener una key 
const ListaOpciones=(props)=>{
    const ListaPersonajes=[
        "Anime",
        "Series",
        "Peliculas",
        "Fantasia",
        "Redes Sociales",
        "Historias"
    ]

    const cambio2=(e)=>{
        props.actualizarValor(e.target.value)//obtiene solo el valor
    }
    return <div className="lista">
            <label>Equipo</label>
            <select 
            value={props.valor}  
            onChange={cambio2}>
                <option value="" disabled defaultValue="">Seleccione su equipo</option>
                {ListaPersonajes.map((ListaPersonajes,index)=><option key={index}>
                    {ListaPersonajes}
                </option>)}
            </select>
        </div>
}

export default ListaOpciones;