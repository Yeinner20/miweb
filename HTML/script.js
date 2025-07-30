const btn = document.getElementById('modo-btn');

// Cargar preferencia guardada
if (localStorage.getItem('modo') === 'oscuro') {
  document.body.classList.add('oscuro');
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  if (document.body.classList.contains('oscuro')) {
    localStorage.setItem('modo', 'oscuro');
  } else {
    localStorage.setItem('modo', 'claro');
  }
});