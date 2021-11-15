//Arreglos

//La sig forma de crearlo es recomendable sólo cuando sabemos que el tamaño va a ser fijo:
//const arreglo = new Array();

const arreglo = [1,2,3,4];   //esto es lo recomendado
//el push no se recomienda porque modifica el objeto principal. Los arreglos son objetos.
// Es mejor usar el Operador de propagación (spread operator) que son los tres puntos.
//arreglo.push(1)

let arreglo2 = [...arreglo, 5]; //esto es lo recomendado
console.log( arreglo );
console.log( arreglo2 );

// una función dentro de un método es lo que llamamos callback
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});

console.log( arreglo3 );





