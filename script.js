// script.js

document.addEventListener("DOMContentLoaded", function () {
  const btnModo = document.getElementById("modo-btn");
  const body = document.body;

  // Verifica si el usuario ya tenía una preferencia guardada
  const modoGuardado = localStorage.getItem("modo");

  if (modoGuardado === "oscuro") {
    body.classList.add("dark-mode");
    btnModo.textContent = "☀️ Modo claro";
  }

  btnModo.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Cambiar texto del botón
    if (body.classList.contains("dark-mode")) {
      btnModo.textContent = "☀️ Modo claro";
      localStorage.setItem("modo", "oscuro");
    } else {
      btnModo.textContent = "🌙 Modo oscuro";
      localStorage.setItem("modo", "claro");
    }
  });
});
