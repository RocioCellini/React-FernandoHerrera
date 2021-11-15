//Desestructuración de arreglos

/*
en este ejemplo useState no lo toma como corresponde ya que no 
está respetando la estructura de react como se debe. Espera un extend o algo como lo sig:
import React, { useState } from 'react'; 
*/


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras,numeros);

/*Tarea
1. el primer valor del arr se llamará nombre
2. el segundo valor del arr se llamará setNombre
*/
const usState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

//const arr = useState('Goku');


//https://es.reactjs.org/docs/hooks-rules.html


const [ nombre, setNombre ] = usState('Goku');

































