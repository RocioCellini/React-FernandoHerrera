import React, { useState } from "react";

export const AddCategory = () =>{
    
    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //hace que se quede en la misma página sin hacer un refresh q camie la url
        console.log('Submit hecho')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form> 
        );
}