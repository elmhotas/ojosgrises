document.addEventListener('DOMContentLoaded', () => {
  const conteos = document.querySelectorAll('.mes');
  const listaMeses = document.getElementById('meses-lista');

  conteos.forEach(mes => {
    const month = mes.dataset.month;
    const count = mes.querySelectorAll('img').length;
    mes.querySelector('.conteo').textContent = count;

    const li = document.createElement('li');
    li.textContent = `${month}: ${count} imagen${count !== 1 ? 'es' : ''}`;
    listaMeses.appendChild(li);
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.remove('hidden');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
    lightboxImg.alt = '';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
      lightboxImg.alt = '';
    }
  });
});
