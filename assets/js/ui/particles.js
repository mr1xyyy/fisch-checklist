const PARTICLES_STORAGE_KEY = 'fisch_particles_enabled';
const particlesLayer = document.getElementById('particles-js');
const particlesToggle = document.getElementById('particlesToggle');

function savedParticlesEnabled(){
  return localStorage.getItem(PARTICLES_STORAGE_KEY) !== 'false';
}

function destroyParticles(){
  if(window.pJSDom && window.pJSDom.length){
    window.pJSDom.forEach(instance => {
      instance.pJS.fn.vendors.destroypJS();
    });
    window.pJSDom = [];
  }
  particlesLayer.innerHTML = '';
}

function loadParticles(){
  if(!window.particlesJS) return;
  destroyParticles();
  window.particlesJS.load('particles-js', 'assets/particlesjs-config.json');
}

function setParticlesEnabled(enabled){
  particlesLayer.classList.toggle('particles-hidden', !enabled);
  particlesToggle.checked = enabled;
  localStorage.setItem(PARTICLES_STORAGE_KEY, String(enabled));

  if(enabled){
    loadParticles();
    return;
  }

  destroyParticles();
}

if(particlesLayer && particlesToggle){
  setParticlesEnabled(savedParticlesEnabled());
  particlesToggle.addEventListener('change', event => {
    setParticlesEnabled(event.target.checked);
  });
}
