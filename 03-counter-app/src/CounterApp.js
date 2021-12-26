/* eslint-disable no-unreachable */
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const handleAdd = (e) => {
        console.log(e)
    }
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
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