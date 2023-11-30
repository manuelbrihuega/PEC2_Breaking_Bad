import Splide from '@splidejs/splide';

// Configuramos el slider de imagenes, que hemos instalado con el módulo splidejs
if (document.getElementsByClassName('splide').length !== 0) {
    new Splide( '.splide', {
        // Se reproducirá en bucle
        type   : 'loop',
        // No pinta flechas para pasar los slides
        arrows: false,
        // Permite arrastrar cada slide
        drag: true,
        // Se inicia la reproducción del bucle automáticamente
        autoplay: true,
        // No se puede pausar
        pause: false,
        // Cada slide se mostrará durante 2 segundos y medio
        interval: 2500
    }).mount();
}