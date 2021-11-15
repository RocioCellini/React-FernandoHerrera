//Promesas
import {getHeroesById} from './bases/08-imp-exp.js';

const promesa = new Promise((resolve, reject) =>{
    setTimeout( () => {
        //console.log("2 seg después")
        //Tarea: importar getHeroesById
        const heroe = getHeroesById(2);
        console.log(heroe);
        resolve();
    }, 2000)
});

promesa.then( () => {
    console.log("then de la promesa")
})