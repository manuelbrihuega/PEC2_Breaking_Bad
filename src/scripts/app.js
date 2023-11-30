// Obtenemos las frases (guardadas en un JSON)
import frases from '../data/frases.json';

// Cargamos la frase célebre
cargarFraseCelebre();

function cargarFraseCelebre() {
    // Cogemos el span donde debe pintarse la frase célebre
    let fraseCelebre = document.getElementById('frase-celebre');
    // Si existe dicho span, pintamos una frase célebre aleatoria
    if (fraseCelebre!==null) {
        fraseCelebre.innerText = frases[(Math.floor(Math.random() * frases.length))].frase;
    }
}

// Función para pintar los listados (temporadas y personajes) que exportamos para utilizar en ambas páginas
export function cargarListado(elementos, tipo) {
    // Para cada elemento del listado
    elementos.forEach((elemento) => {
        // Creamos un div y le asignamos la clase del tipo que sea (personaje o temporada)
        let elementoItem = document.createElement('div');
        elementoItem.setAttribute('class', tipo);
        // Creamos otro div que representará al elemento en el grid
        let gridItem = document.createElement('div');
        // Le damos la clase según el aspecto que vaya a presentar el elemento
        gridItem.setAttribute('class', `grid-item ${elemento.aspecto}`);
        // Le establecemos la imagen del elemento como fondo al div
        gridItem.style.backgroundImage = `url('./${tipo}s/${elemento.imagen}-tall.webp')`;
        // Creamos un enlace a la página de detalle, para ello le establecemos el destino y el título
        let elementoLink = document.createElement('a');
        elementoLink.setAttribute('href', `detalle-${tipo}.html?${tipo}=${elemento.url}`);
        elementoLink.setAttribute('title', `Web de detalle sobre ${elemento.nombre}`);
        // El texto del enlace será el nombre del elemento
        elementoLink.innerText = elemento.nombre;
        // Colocamos el enlace dentro del div cuya clase es el tipo
        elementoItem.appendChild(elementoLink);
        // Colocamos ese mismo div dentro del div que actúa como elemento del grid
        gridItem.appendChild(elementoItem);
        // Añadimos el elemento del grid dentro del div contenedor de elementos
        document.getElementsByClassName(`${tipo}s`)[0].append(gridItem);
    });
}