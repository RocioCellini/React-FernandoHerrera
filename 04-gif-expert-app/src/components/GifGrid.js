import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data: images, loading}= useFetchGifs(category);

    return(
        <>

        <h3 className="animate__animated animate__fadeIn"> {category} </h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))  
            }
        </div> 

       </>
    )
}

    /* 
    {loading ? <p>Loading</p> : null} esto se puede escribir con la forma corta:
    {loading && <p>Loading</p>}
    */
    /* data: images es una manera de renombrar data por images, sino hay q usar data solo */

    /*useEffect evitará que se entre en un bucle infinito cada vez q se renderice el componente. 
    Hace que solo se llame a getGifs la primera vez q se carga el componente */

    /* const getGifs = async() => {
        const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3dT4JSMP4Lp9oORwbHgEAzO3Jp3MrR18`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // el signo interrogatorio sirve para corroborar que realmente traiga imagenes
            }
        })

        console.log(gifs);
        setImages(gifs);
    } */

   // getGifs(); 

   
        /* <ol>    { 
                images.map( img =>  ( 
                    <li key={img.id}> {img.title} </li>
                    ),
                )
            }   </ol> */
            
            // Esto es lo mismo que si desestructuro img
            
            /*     images.map( ({id, title}) =>  ( 
                    <li key={id}> {title} </li>
                    ),
                ) */