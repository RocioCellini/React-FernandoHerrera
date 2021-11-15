
const persona = {
   nombre : 'Rocío',
   apellido : 'Cellini',
   edad: 34,
   direccion: {
         ciudad: 'New York',
         zipcode:2125,
         lat: 14.565,
         lng: 34.845
   }
};

console.log( persona ); // así no tengo el nombre del objeto

console.log( {
   persona //también se puede poner solo para que se vea el nombre del objeto
} );

console.log( {
   persona:persona //prop persona del ojeto persona. Muestra lo mismo q el anterior
} );

console.table( persona );

const persona2 = persona; //aquí no estamos copiando los valores, sino la referencia
persona2.nombre = 'Peter';
console.log( persona2 );

//esta no es la forma correcta de crear un clon, porq si pongo lo sig estoy modificando el objeto base

console.log( persona ); 

//la forma correcta de crear un clon es creando un nuevo objeto.
//Para esto en ES6 surge el spread operator


const persona3 = { ...persona }; //aquí no estamos copiando los valores, sino la referencia
persona2.nombre = 'Peter';

console.log( persona3 );








