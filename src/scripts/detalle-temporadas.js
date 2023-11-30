// Obtenemos la info de las temporadas (guardada en un JSON)
import temporadas from '../data/temporadas.json';

// Obtenemos la URL actual
const url = new URL(window.location.href);
// Miramos si en la URL actual existe el parámetro "temporada" y en caso afirmativo preparamos la página de detalle temporada
if (url.searchParams.has('temporada')) {
    // Buscamos la temporada que recibimos por url
    let temporada = temporadas.find(temporada => temporada.url === url.searchParams.get('temporada'));

    let figureFicha = document.createElement('figure');
    let figcaptionFicha = document.createElement('figcaption');
    // En el figcaption ponemos el nombre de la temporada
    figcaptionFicha.innerText = temporada.nombre;
    // Creamos el picture para colocar la imagen de la temporada dentro del figure
    var pictureElement = document.createElement("picture");

    var source = document.createElement("source");
    source.setAttribute("media", "(max-width: 450px)");
    source.setAttribute("srcset", `./temporadas/${temporada.imagen}-tall.webp`);
    pictureElement.appendChild(source);

    var source2 = document.createElement("source");
    source2.setAttribute("media", "(max-width: 1000px)");
    source2.setAttribute("srcset", `./temporadas/${temporada.imagen}-wide.webp`);
    pictureElement.appendChild(source2);

    var source3 = document.createElement("source");
    source3.setAttribute("media", "(max-width: 1200px)");
    source3.setAttribute("srcset", `./temporadas/${temporada.imagen}-tall.webp`);
    pictureElement.appendChild(source3);

    let imagenFicha = document.createElement('img');
    imagenFicha.setAttribute('src', `./temporadas/${temporada.imagen}-wide.webp`);
    imagenFicha.setAttribute('alt', temporada.nombre);
    pictureElement.appendChild(imagenFicha);

    figureFicha.appendChild(pictureElement);
    figureFicha.appendChild(figcaptionFicha);
    // Colocamos el figure dentro del div destinado para la imagen
    document.getElementsByClassName('imagen')[0].appendChild(figureFicha);


     // Creamos un figure y su figcaption para colocar el trailer de la temporada
    let figureTrailer = document.getElementById('trailer');
    let figcaptionTrailer = figureTrailer.getElementsByTagName('figcaption')[0];
    // Sustituimos ### del figcaption por el nombre de la temporada
    figcaptionTrailer.innerText = figcaptionTrailer.innerText.replace('###', temporada.nombre);
    // Metemos el iframe del trailer en el figure
    figureTrailer.innerHTML = temporada.trailer;
    figureTrailer.appendChild(figcaptionTrailer);
    // Colocamos el texto y la ficha en sus divs respectivos
    document.getElementsByClassName('texto')[0].innerHTML=temporada.texto;
    let divFicha = document.createElement('div');
    divFicha.innerHTML=temporada.ficha;
    let divCapitulos = document.createElement('div');
    divCapitulos.innerHTML=temporada.capitulos;
    document.getElementsByClassName('cabecera')[0].append(divFicha);
    document.getElementsByClassName('capitulos')[0].append(divCapitulos);
    // Colocamos el nombre de la temporada en el H1 de la página
    document.getElementsByTagName('h1')[0].innerText=temporada.nombre;
    let contenidoIntro = document.getElementsByClassName('contenido')[0];
    // Sustituímos las ### de la intro por el nombre de la temporada
    contenidoIntro.innerText = contenidoIntro.innerText.replace('###', temporada.nombre);
    let pNota = document.createElement('p');
    pNota.innerHTML = temporada.nota;
    document.getElementsByClassName('nota')[0].append(pNota);
}