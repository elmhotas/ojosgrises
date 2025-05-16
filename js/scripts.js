// Abrir imagen en lightbox
const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImage = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

items.forEach(item => {
  item.addEventListener('click', () => {
    lbImage.src = item.src;
    lbImage.alt = item.alt;
    lightbox.classList.remove('hidden');
  });
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Cerrar al hacer click fuera de la imagen
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});