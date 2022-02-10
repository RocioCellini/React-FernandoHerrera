import { useState } from "react"

export const useCounter = (inicialState=10) => {
    const [state, setState] = useState(inicialState);

    const increment = () => {
        setState(state + 1);
    }

    const decrement = () => {
        setState(state - 1);
    }

    const resert = () => {
        setState(inicialState);
    }

    return{
        state,
        increment,
        decrement,
        resert
    }
}