function showElements(base_datos) {
  let dom = document.querySelector(".contenido");
  let mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");

  // Limpiar contenido anterior
  dom.innerHTML = "";

  base_datos.forEach((elemento) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <img src="${elemento.img}">
      <h2 class="nombre_productos">${elemento.nombre}</h2>
      <h3>Código de objeto: ${elemento.id}</h3>
      <p>$${elemento.precio}</p>
      <button class="button-buy">Añadir al carro</button>
    `;

    dom.appendChild(item);

    // Agregar evento de clic al botón "Añadir al carro"
    const buttonBuy = item.querySelector(".button-buy");
    buttonBuy.addEventListener("click", () => {
      addToCart(elemento);
    });
  });

  // Mostrar mensaje de no encontrado si no hay elementos en la base de datos
  if (base_datos.length === 0) {
    mensajeNoEncontrado.style.display = "block";
  } else {
    mensajeNoEncontrado.style.display = "none";
  }
}


document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    const searchValue = e.target.value.toLowerCase();
    const items = document.querySelectorAll(".item");
    const mensajeNoEncontrado = document.getElementById("mensaje-no-encontrado");

    let orderCounter = 1;
    let foundMatch = false;

    items.forEach((item) => {
      const nombre = item.querySelector(".nombre_productos");
      const shouldShow = nombre.textContent.toLowerCase().includes(searchValue);
      item.style.display = shouldShow ? "block" : "none";

      if (shouldShow) {
        item.style.order = orderCounter;
        orderCounter++;
        foundMatch = true;
      }
    });

    mensajeNoEncontrado.style.display = foundMatch ? "none" : "block";

    if (e.key === "Escape") {
      e.target.value = "";
      items.forEach((item) => {
        item.style.display = "block";
        item.style.order = 0;
      });
      mensajeNoEncontrado.style.display = "none";
    }
  }
});

function addToCart(elemento) {
  const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
  carritoActual.push(elemento);
  localStorage.setItem("carrito", JSON.stringify(carritoActual));
}

// Llamar a la función para mostrar los elementos al cargar la página
showElements(base_datos);