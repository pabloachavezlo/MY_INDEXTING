function loadCartItems() {
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const carroLista = document.querySelector(".carro-lista");
  
    // Limpiar contenido anterior
    carroLista.innerHTML = "";
  
    if (carritoActual.length === 0) {
      // Carrito vacío, no hay elementos para mostrar
      carroLista.innerHTML = "<p>El carrito está vacío.</p>";
      return;
    }
  
    carritoActual.forEach((elemento) => {
      const carritoItem = document.createElement("li");
      carritoItem.classList.add("carro-item");
      carritoItem.innerHTML = `
        <img src="${elemento.img}">
        <div>
          <p>${elemento.nombre}</p>
          <p>Precio: $${elemento.precio}</p>
        </div>
        <button class="button-remove" data-id="${elemento.id}">Eliminar</button>
      `;
      carroLista.appendChild(carritoItem);
    });
}
  
function removeFromCart(event) {
    const id = event.target.dataset.id;
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoFiltrado = carritoActual.filter((elemento) => elemento.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carritoFiltrado));
  
    // Remover el elemento del carrito en la página
    event.target.closest(".carro-item").remove();
}
  
  const carroLista = document.querySelector(".carro-lista");
  carroLista.addEventListener("click", (event) => {
    if (event.target.classList.contains("button-remove")) {
      removeFromCart(event);
    }
  });
  
  // Cargar los elementos del carrito guardados en localStorage al cargar la página
loadCartItems();
  