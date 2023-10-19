import "./ListaOpciones.css"
//se debe tener una key 
const ListaOpciones=()=>{
    const ListaPersonajes=[
        "Anime",
        "Series",
        "Peliculas",
        "Meme",
        "Fantasia",
        "RRSS",
        "Historias"
    ]

    return <div className="lista">
            <label>Equipo</label>
            <select>
                {ListaPersonajes.map((ListaPersonajes,index)=><option key={index}>
                    {ListaPersonajes}
                </option>)}
            </select>

    </div>
}

export default ListaOpciones;