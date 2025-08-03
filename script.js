// script.js

document.addEventListener("DOMContentLoaded", () => {
  const btnModo = document.getElementById("modo-btn");
  const body = document.body;

  // 🌓 Modo oscuro con localStorage
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    body.classList.add("dark-mode");
    btnModo.textContent = "☀️ Modo claro";
  }

  btnModo.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const modo = body.classList.contains("dark-mode") ? "oscuro" : "claro";
    btnModo.textContent = modo === "oscuro" ? "☀️ Modo claro" : "🌙 Modo oscuro";
    localStorage.setItem("modo", modo);
  });

  // 📦 Cargar productos desde JSON
  fetch("productos.json")
    .then((response) => {
      if (!response.ok) throw new Error("No se pudo cargar productos.json");
      return response.json();
    })
    .then((productos) => {
      productos.forEach((producto) => {
        const contenedor =
          producto.marca === "LG"
            ? document.querySelector(".productos-lg")
            : document.querySelector(".productos-samsung");

        const post = document.createElement("article");
        post.classList.add("post");

        post.innerHTML = `
          <h3>${producto.titulo}</h3>
          <img src="${producto.imagen}" alt="${producto.titulo}" />
          <p>${producto.descripcion}</p>
        `;

        contenedor.appendChild(post);
      });
    })
    .catch((error) => {
      console.error("Error al cargar productos:", error);
    });
});
