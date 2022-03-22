import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    const {quote} = !!data && data[0]; //el doble signo de admiración es false, si existe la data entonces que traiga la primer posición.
    
    //console.log(quote,author);
    const pTag = useRef();
    const [boxSize,setBoxSize] = useState({});
    
    useLayoutEffect(()=>{
        setBoxSize(pTag.current.getBoundingClientRect());
    },[quote])


    return(
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p 
                className='mb-0' 
                ref={pTag}
                >
                    {quote}
                </p>
                <br></br>                
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button 
                onClick={increment} 
                className='btn btn-primary'
                >
                Siguiente frase (quote) 
            </button>

        </div>
    )
}