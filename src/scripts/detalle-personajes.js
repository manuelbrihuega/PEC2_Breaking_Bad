// Obtenemos la info de los personajes (guardada en un JSON)
import personajes from '../data/personajes.json';

// Obtenemos la URL actual
const url = new URL(window.location.href);
// Miramos si en la URL actual existe el parámetro "personaje" y en caso afirmativo preparamos la página de detalle personaje
if (url.searchParams.has('personaje')) {
    // Buscamos al personaje que recibimos por url
    let personaje = personajes.find(personaje => personaje.url === url.searchParams.get('personaje'));
    // Creamos un figure y su figcaption para colocar la imagen del personaje
    let figureFicha = document.createElement('figure');
    let figcaptionFicha = document.createElement('figcaption');
    // En el figcaption ponemos el nombre del personaje
    figcaptionFicha.innerText = personaje.nombre;
    // Creamos el img para colocar la imagen del personaje dentro del figure
    let imagenFicha = document.createElement('img');
    imagenFicha.setAttribute('src', `./personajes/${personaje.imagenFicha}`);
    imagenFicha.setAttribute('alt', personaje.nombre);
    figureFicha.appendChild(imagenFicha);
    figureFicha.appendChild(figcaptionFicha);
    // Colocamos el figure dentro del div destinado para la imagen
    document.getElementsByClassName('imagen')[0].appendChild(figureFicha);
    // Colocamos el texto y la ficha en sus divs respectivos
    document.getElementsByClassName('texto')[0].innerHTML=personaje.texto;
    document.getElementsByClassName('ficha')[0].innerHTML=personaje.ficha;
    // Colocamos el nombre del personaje en el H1 de la página
    document.getElementsByTagName('h1')[0].innerText=personaje.nombre;
    let contenidoIntro = document.getElementsByClassName('contenido')[0];
    // Sustituímos las ### de la intro por el nombre del personaje
    contenidoIntro.innerText = contenidoIntro.innerText.replace('###', personaje.nombre); 
}