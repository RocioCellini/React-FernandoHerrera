/* eslint-disable no-unreachable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
   /*  const state= useState('Goku');
    console.log(state); 
    const [nombre, setnombre]= useState('Goku');
    console.log(nombre, setnombre);*/

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
        /* otra forma de incrementar seria:
        setCounter((c)=>c+1);
        */
    }

    /* al ser de una linea no hacen falta las llaves en la función */
    const handleSustract = () => setCounter(counter - 1);
    
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/*  también puedo colocar en lugar de definir la función arriba
            <button onClick={ (e) =>{console.log(e)} }>+1</button>  */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSustract }>-1</button>
        </>
        
    );
    CounterApp.propTypes = {
        value: PropTypes.number
    }
    
}


export default CounterApp;