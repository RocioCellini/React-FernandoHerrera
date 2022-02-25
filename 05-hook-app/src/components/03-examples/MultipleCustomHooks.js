import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    const {quote,author} = !!data && data[0]; //el doble signo de admiración es false, si existe la data entonces que traiga la primer posición.
    
    //console.log(quote,author);

    return(
        <div>
            <h1>Custom Hooks!!</h1>
            <hr />

            {
                loading 
                ? 
                (
                    <div className='alert alert-info text-center'>loading...</div>
                )
                :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <br></br>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>
                )
            }

            <button 
                onClick={increment} 
                className='btn btn-primary'
                >
                Siguiente frase (quote) 
            </button>

        </div>
    )
}