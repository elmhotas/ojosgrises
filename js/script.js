// Funcionalidad Lightbox
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
closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.add('hidden');
});

// IIFE para Agrupación y Conteo por Mes
(() => {
  const mesesArticulos = document.querySelectorAll('article.mes');
  const resumenLista = document.getElementById('meses-lista');

  console.log('🏷️ Artículos por mes:', mesesArticulos.length);

  mesesArticulos.forEach(art => {
    const month = art.dataset.month;
    const [year, mes] = month.split('-');
    const nombreMes = new Date(year, mes - 1)
                      .toLocaleString('es-ES', { month: 'long', year: 'numeric' });
    const imgs = art.querySelectorAll('.gallery-item');
    const count = imgs.length;
    console.log(`📅 ${nombreMes}:`, count, 'imágenes');

    // Actualizar contador en el título
    const contadorSpan = art.querySelector('.conteo');
    if (contadorSpan) contadorSpan.textContent = count;

    // Añadir al resumen
    const li = document.createElement('li');
    li.innerHTML = `${nombreMes}: <span>${count}</span> imágenes`;
    resumenLista.appendChild(li);
  });
})();
