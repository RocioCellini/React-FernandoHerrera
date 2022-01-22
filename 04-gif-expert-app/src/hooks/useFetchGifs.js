import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category) //como getGifs es una promesa puedo usar then
        .then( imgs =>{
            setState({
                data: imgs,
                loading: false
            });
        }) // setImages da el mismo resultado que poner imgs => setImages(imgs)
    },[category]) //el effect hace q suceda lo q contiene cada vez q cambia la categoría

    return state; // retorna el objeto {data: [], loading: true}
}