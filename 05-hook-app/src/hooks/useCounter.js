import { useState } from "react"

export const useCounter = (inicialState=10) => {
    const [counter, setCounter] = useState(inicialState);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const resert = () => {
        setCounter(inicialState);
    }

    return{
        counter,
        increment,
        decrement,
        resert
    }
}