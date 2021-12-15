import React from "react";
//import React, { Fragment } from "react";

const PrimeraApp = (props) => {

    /*const saludo = "Hola gran mundo";

    const objeto = {
        nombre: 'Rocío',
        edad: 34
    }

    console.log(props);*/

    return ( 
        <>
            <h1>{props.saludo}</h1>
           { /*<pre>{JSON.stringify(objeto, null,3)}</pre>*/}
            <p>Mi primera aplicación</p>
        </>
            );
    /* JS puede retornar un sólo objeto a la vez
    por eso es que no se puede poner 
    return
        <h1>Hola Mundo</h1>
        <p>Mi primera aplicación</p>
    En cambio si uso paréntesis le estoy diciendo que todo es parte de un mismo objeto
    y para ello debe ser todo un elemento, como ser un div.
    Si hay varios elementos podemos usar un tag Fragment
    Fragment tamb se puede escribir abreviado <></> y de esta forma no hace falta importarlo, la
    primer linea quedaría... import React from "react"
    */
}

export default PrimeraApp;