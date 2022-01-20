
export const getGifs = async(category) => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3dT4JSMP4Lp9oORwbHgEAzO3Jp3MrR18`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // el signo interrogatorio sirve para corroborar que realmente traiga imagenes
        }
    })

    return gifs; //como es async, ésta función getGifs no me regresa directamente los gifs, sino una promesa que resuelve la colección de mis imágenes
}