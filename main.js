import Particles from 'particlesjs'; // Utilisez simplement le nom du module sans le chemin relatif


window.onload = function() {
  Particles.init({
    selector: '.background',
    responsive: true,
    maxParticles: 1000,
    sizeVariations: 6,
    showParticles: true,
    speed: 1,
    color: 'white',
    minDistance: 120,
    connectParticles: true,

  });
  console.log(Particles)
};
import Typewriter from 'typewriter-effect/dist/core'
new Typewriter('#tpwriter', {
  strings: ['Developer', 'Programmer'],
  autoStart: true,
  loop: true,
});
new Typewriter('#tpwriter2', {
  strings: ['Eiman Mohamed Cherif', 'Prime_Height'],
  autoStart: true,
  loop: true,
});
if (monObjet && monObjet.name) {
  // Faire quelque chose avec monObjet.name
} else {
  console.error("monObjet ou monObjet.name est null");
}
