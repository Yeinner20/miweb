// script.js

document.addEventListener("DOMContentLoaded", () => {
  const btnModo = document.getElementById("modo-btn");
  const body = document.body;

  // 🌓 Modo oscuro
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

  // 📦 Productos directamente en JS (para GitHub Pages)
  const productos = [
    {
      marca: "LG",
      categoria: "residencial",
      titulo: "Modelos residenciales",
      imagen: "IMAGEN/PRECIOS LG ENERO 2025.jpeg",
      descripcion: "Listado de precios actualizado a mayo de 2025."
    },
    {
      marca: "LG",
      categoria: "comercial",
      titulo: "Modelos comerciales",
      imagen: "IMAGEN/a287b392-c51f-4b23-87f3-c89dda5f3099.jpg",
      descripcion: "Aplican condiciones especiales según volumen."
    },
    {
      marca: "Samsung",
      categoria: "comercial",
      titulo: "Modelos comerciales",
      imagen: "IMAGEN/a287b392-c51f-4b23-87f3-c89dda5f3099.jpg",
      descripcion: "Listado vigente hasta mayo de 2025."
    }
  ];

  // 🔁 Renderizado dinámico
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
});
