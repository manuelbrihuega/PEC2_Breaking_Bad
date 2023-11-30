import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';


await imagemin(['img/*.{jpg,png}'], {
  destination: 'img_compressed',
  plugins: [imageminWebp({quality: 50})]
});

await imagemin(['img/escenas/*.{jpg,png}'], {
  destination: 'img_compressed/escenas',
  plugins: [imageminWebp({quality: 50})]
});

await imagemin(['img/no-enlazadas/personajes/*.{jpg,png}'], {
  destination: 'img_compressed/no-enlazadas/personajes',
  plugins: [imageminWebp({quality: 50})]
});

await imagemin(['img/no-enlazadas/temporadas/*.{jpg,png}'], {
  destination: 'img_compressed/no-enlazadas/temporadas',
  plugins: [imageminWebp({quality: 50})]
});

await imagemin(['img/slider/*.{jpg,png}'], {
  destination: 'img_compressed/slider',
  plugins: [imageminWebp({quality: 50})]
});

console.log("Imagenes optimizadas");