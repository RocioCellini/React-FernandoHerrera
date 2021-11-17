//Promesas
 import {getHeroesById} from './bases/08-imp-exp.js';
/*
const promesa = new Promise((resolve, reject) =>{
    setTimeout( () => {
        //console.log("2 seg después")
        //Tarea: importar getHeroesById
        const heroe = getHeroesById(6);
        //console.log(heroe);
        //resolve(heroe);
        reject("No se pudo encontrar el héroe");
    }, 2000)
});

promesa.then( (heroe) => {
    console.log("Mi héroe favorito es: ", heroe)
})
.catch( err => console.warn(err)) */

const getHeroesByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) =>{
        setTimeout( () => {
            const heroe = getHeroesById(id);
            //console.log(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject("No se encontró el héroe");
            }    
        }, 2000)
    });

    return promesa;

  /*   Esto también se puede escribir:
    return  const promesa = new Promise((resolve, reject) =>{
        setTimeout( () => {
            const heroe = getHeroesById(id);
            resolve(heroe);
        }, 2000)
    }); */

}

getHeroesByIdAsync(4)
    /*lo sig es otra forma de escribir:
    .then(heroe => console.log('Mi héroe favorito es: ', heroe))
    */
    .then(console.log)
    /*lo sig es otra forma de escribir:
    .catch(err => console.warn(err))
    */
    .catch(console.warn)
