import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    /*useEffect evitará que se entre en un bucle infinito cada vez q se renderice el componente. 
    Hace que solo se llame a getGifs la primera vez q se carga el componente */
    
    useEffect(()=>{
        getGifs(category) //como getGifs es una promesa puedo usar then
        .then( setImages ); // setImages da el mismo resultado que poner imgs => setImages(imgs)
    },[category])

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

    return(
        <>
        <h3> {category} </h3>
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