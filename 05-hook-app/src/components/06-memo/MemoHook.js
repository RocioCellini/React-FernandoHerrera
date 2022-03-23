import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado.js';
import {useCounter} from '../../hooks/useCounter.js';
import '../02-useEffect/effects.css';

export const MemoHook = () =>{
    const {counter, increment} = useCounter(1000); 
    const [show,setShow] = useState(true);

    /* const procesoPesado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos');            
        }

        return `${iteraciones} iteraciones realizadas`;
    } */
    
    /* Las partes variables de una Template String se denominan 
    placeholders y utilizan la sintaxis ${ } para diferenciarse del resto de la cadena.*/

    const memoProcesoPesado = useMemo(()=>{procesoPesado(counter)},[counter])

    return(
        
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                +1
            </button>
            <br></br><br></br>
            <button
                className='btn btn-outline-primary ml-3'
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Hide/Show { JSON.stringify(show) }
            </button>
        </div>
    )
}