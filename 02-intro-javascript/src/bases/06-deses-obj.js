
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

/* De la sig forma se hace una desestructuración
const { edad, clave, nombre} = persona;

console.log( nombre );
console.log( edad );
console.log( clave ); */

/* Otra manera es, para desetructurar lo sig:
const retornaPersona = ( usuario ) => {
    console.log(usuario)
}

retornaPersona( persona ); 

Hacemos:

 const retornaPersona = ( usuario ) => {
    const { edad, clave, nombre} = persona;
    console.log(edad, clave, nombre);
}

retornaPersona( persona ); */

/* Otra forma es hacer por parámetros: 

 const retornaPersona = ( {nombre, edad, rango = 'Capitán'} ) => {
    console.log(nombre, edad, rango);
}

retornaPersona( persona ); */

const useContext = ( {clave, nombre, edad, rango = 'Capitán'} ) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );

console.log(nombreClave, anios);
console.log(lat, lng);





















