import { heroes } from './data/heroes'; // no hace falta el .js

const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

console.log( getHeroesById(2));

// hacer lo mismo pero para obtener el owner. Como find solo se usa para obtener uno, ahora debemos usar filter
const getHeroesByOwner = (owner) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroesByOwner('DC'));