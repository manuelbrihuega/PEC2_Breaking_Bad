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