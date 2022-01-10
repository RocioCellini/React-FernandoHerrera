import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) =>{
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //hace que se quede en la misma página sin hacer un refresh q camie la url
    
        if(inputValue.trim().length > 2){
            setCategories( cats => [ ...cats, inputValue] );  
            setInputValue(''); 
        }else{
            alert('Ingresar al menos dos caracteres');
        }
        
    }
    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired
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

