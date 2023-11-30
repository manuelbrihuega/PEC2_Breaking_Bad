// Obtenemos la info de los personajes (guardada en un JSON)
import personajes from '../data/personajes.json';
import { cargarListado } from './app';

// Preparamos la lista de los personajes
if (document.getElementsByClassName('personajes').length !== 0){
    // Vaciamos el contenedor
    document.getElementsByClassName('personajes')[0].innerText = "";
    // Pintamos los personajes
    cargarListado(personajes, 'personaje');
}