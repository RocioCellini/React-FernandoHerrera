//import React, { memo } from "react";
import React from "react";
/*
Memo es un método que sirve para memorizar algo.
De esta manera sólo si sus properties cambian, se va a volver a renderizar.
 */
export const Small = React.memo(({value}) => {
    
    console.log('Me volví a llamar :(');

    return(
        <small>{value}</small>
    )
})