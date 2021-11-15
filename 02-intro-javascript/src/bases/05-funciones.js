//Funciones en JS
/* no es recomendable crearlas como sigue porque es muy fácil caerle encima poniendo por ej, saludar = 30.
Es mejor definir una constante

function saludar ( nombre ){
    return `Hola, ${ nombre }`;
}

console.log( saludar('Rocío'))*/

const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

console.log( saludar );

//Función flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar2 ('Gonzalo') );

//Si tengo entre llaves una sola linea, puedo reducirla así:

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

// Función sin parámetros
const saludar4 = () => `Hola Mundo`;

console.log( saludar3('Martin') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Gonza1502'
    }
}

console.log( getUser() );

//getUser también se puede escribir así:

const getUser1 = () => ({
        uid: 'ABC123',
        username: 'El_Gonza1502'
    });


console.log( getUser1() );

/*Tarea
    1. Transformen a una función de flecha
    2. Tiene que retornar un objeto implícito (para esto saco return y uso paréntesis)
    3. Pruebas
*/
function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );

// 1
const getUsuarioActivo1 = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
    });

console.log( getUsuarioActivo1('Fernando') );

















