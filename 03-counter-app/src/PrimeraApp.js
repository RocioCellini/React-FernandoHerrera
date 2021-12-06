import React, { Fragment } from "react";

const PrimeraApp = () => {
    return ( 
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicación</p>
        </Fragment>
            );
    /* JS puede retornar un sólo objeto a la vez
    por eso es que no se puede poner 
    return
        <h1>Hola Mundo</h1>
        <p>Mi primera aplicación</p>
    En cambio si uso paréntesis le estoy diciendo que todo es parte de un mismo objeto
    y para ello debe ser todo un elemento, como ser un div.
    Si hay varios elementos podemos usar un Fragment
    Fragment tamb se puede escribir abreviado <></>
    */
}

export default PrimeraApp;