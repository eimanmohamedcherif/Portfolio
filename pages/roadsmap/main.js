import Particles from 'particlesjs'

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