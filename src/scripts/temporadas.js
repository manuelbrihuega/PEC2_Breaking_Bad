// Obtenemos la info de las temporadas (guardada en un JSON)
import temporadas from '../data/temporadas.json';
import { cargarListado } from './app';

// Preparamos la lista de las temporadas
if (document.getElementsByClassName('temporadas').length !== 0) {
    // Vaciamos el contenedor
    document.getElementsByClassName('temporadas')[0].innerText = "";
    // Pintamos las temporadas
    cargarListado(temporadas, 'temporada');
}