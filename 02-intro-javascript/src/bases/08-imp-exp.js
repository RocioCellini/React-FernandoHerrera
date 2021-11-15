//Import, export y funciones comunes de arreglos
//Multiples exportaciones y exportaciones por defecto

import heroes, { owners } from '../data/heroes'; // no hace falta el .js
/* si se importa por defecto y una constante o algo más, lo q es por defecto va 
suelto y el resto va entre llaves, como si fuera una desestructuración de objetos*/
//console.log(heroes);
//console.log(owners);

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log( getHeroesById(2));

//Tarea: hacer lo mismo pero para obtener el owner. Como find solo se usa para obtener uno, ahora debemos usar filter
//const getHeroesByOwner = (owner) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));