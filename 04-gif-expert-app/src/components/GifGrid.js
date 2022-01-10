import React, { useEffect, useState } from "react";

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);

    /*useEffect evitará que se entre en un bucle infinito cada vez q se renderice el componente. 
    Hace que solo se llame a getGifs la primera vez q se carga el componente */
    
    useEffect(()=>{
        getGifs();
    },[])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=harry+potter&limit=10&api_key=3dT4JSMP4Lp9oORwbHgEAzO3Jp3MrR18';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                tittle: img.tittle,
                url: img.images?.downsized_medium.url // el signo interrogatorio sirve para corroborar que realmente traiga imagenes
            }
        })

        console.log(gifs);
    }

   // getGifs();

    return(
        <div>
        <h3> {category} </h3>
        <h3> {count} </h3>
        <button onClick={()=>setCount(count +1)}>Sumar</button>
        </div>
    )
}