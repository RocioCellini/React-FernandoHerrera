// Fetch api es una librería que permite hacer peticiones a php mediante endpoints
const apiKey= 'G8vzKAm2yKv0RQeEzEhIc5ySqwQ0lUi0';

const peticion= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  /*
  peticion.then(resp => {
    resp.json().then(data =>{
        console.log(data)
    }) 
  })
  Esto se puede escribir más lindo como se ve a continuación
  */
peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
       // console.log(data.images.original.url)
       // console.log(url);
       //desestructuramos lo anterior haciendo:
       const {url}= data.images.original;
       const img = document.createElement('img');
       img.src=url;
       document.body.append(img);
      
    })
    .catch(console.warn);
