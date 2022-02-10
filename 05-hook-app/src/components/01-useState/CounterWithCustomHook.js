import React from "react";
import { useCounter } from "../../hooks/useCounter";
import './counterApp.css';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, resert} = useCounter(100);
    // el order en la desustructuración no importa
    return (        
        <>
            <h1>Counter with hook: {state} </h1>
            <hr />

            <button onClick={increment} className="btn"> +1 </button>
            <button onClick={decrement} className="btn"> -1 </button>
            <button onClick={resert} className="btn"> Resert </button>
        </>
    )
}