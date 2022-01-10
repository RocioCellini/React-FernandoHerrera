import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Harry potter', 'Samurai X', 'Dragon Ball']) ;

   /*  const handleAdd = () => {
         setCategories([...categories, 'HunterXHunter']);
    } */

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories}/>
            <ol>
                { 
                    categories.map( category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
