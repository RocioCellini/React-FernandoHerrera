import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter.js';
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () =>{
    const {counter, increment} = useCounter(10); 
    const [show,setShow] = useState(true);

    return(
        
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr/>

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