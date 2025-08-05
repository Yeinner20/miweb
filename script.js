document.addEventListener("DOMContentLoaded", () => {
  const btnModo = document.getElementById("modo-btn");
  const body = document.body;
  const inputBusqueda = document.getElementById("input-busqueda");
  const contador = document.getElementById("contador-productos");
  const contenedorLG = document.querySelector(".productos-lg");
  const contenedorSamsung = document.querySelector(".productos-samsung");

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

  // 🌓 Modo oscuro persistente
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

  // 🔁 Función para renderizar productos
  function renderizarProductos(filtrados) {
    contenedorLG.innerHTML = "";
    contenedorSamsung.innerHTML = "";

    if (filtrados.length === 0) {
      contador.textContent = "No se encontraron productos.";
      return;
    }

    filtrados.forEach((producto) => {
      const contenedor =
        producto.marca === "LG" ? contenedorLG : contenedorSamsung;

      const post = document.createElement("article");
      post.classList.add("post");
      post.innerHTML = `
        <h3>${producto.titulo}</h3>
        <img src="${producto.imagen}" alt="${producto.titulo}" />
        <p>${producto.descripcion}</p>
      `;
      contenedor.appendChild(post);
    });

    contador.textContent = `Mostrando ${filtrados.length} producto(s)`;
  }

  // 🔍 Filtro en tiempo real
  inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase().trim();

    const resultado = productos.filter((producto) => {
      return (
        producto.titulo.toLowerCase().includes(texto) ||
        producto.descripcion.toLowerCase().includes(texto) ||
        producto.marca.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto)
      );
    });

    renderizarProductos(resultado);
  });

  // 🟢 Render inicial
  renderizarProductos(productos);
});
