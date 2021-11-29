const activo = true;
/* let mensaje = '';

if(activo){
    mensaje='Está activo';
}else{
    mensaje='Está inactivo';
} */

//const mensaje = (activo) ? 'Está activo' : 'Está inactivo';

// const mensaje = (activo) && 'Activo';

const mensaje = (!activo) && 'Activo';

console.log(mensaje);