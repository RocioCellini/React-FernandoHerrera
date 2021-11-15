//Template string

const nombre = "Rocío";
const apellido = "Cellini";

//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1 }
`; // comilla invertida : ALT + 96

console.log( nombreCompleto );

function getSaludo(nombre){
   // return 'Hola Mundo';
   return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo( nombre ) }`);