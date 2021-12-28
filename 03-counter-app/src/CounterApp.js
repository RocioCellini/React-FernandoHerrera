/* eslint-disable no-unreachable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
   /*  const state= useState('Goku');
    console.log(state); 
    const [nombre, setnombre]= useState('Goku');
    console.log(nombre, setnombre);*/

    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
        /* otra forma de incrementar seria:
        setCounter((c)=>c+1);
        */
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
     {/*  también puedo colocar en lugar de definir la función arriba
      <button onClick={ (e) =>{console.log(e)} }>+1</button>  */}
     <button onClick={ handleAdd }>+1</button>
        </>
        
    );
    CounterApp.propTypes = {
        value: PropTypes.number
    }
    
}


export default CounterApp;