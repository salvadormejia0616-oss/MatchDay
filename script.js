// Navegación móvil: abrir y cerrar menú.
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (menu && links) {
  menu.addEventListener('click', () => {
    const abierto = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(abierto));
  });
}

// Los productos son conceptos, no una tienda con pagos reales.
document.querySelectorAll('.demo-buy').forEach(boton => {
  boton.addEventListener('click', () => {
    alert(boton.dataset.product + '\n\nProducto conceptual de MatchDay. Próximamente.');
  });
});
