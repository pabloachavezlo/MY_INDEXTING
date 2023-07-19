function forEachHola(base_datos) {
    let dom = document.querySelector(".contenido");
    base_datos.forEach((elemento) => {

        let item = document.createElement("div");
        item.classList.add("content")  
        item.innerHTML = `
        
        <div class="item">
            <img src="${elemento.img}">
            <h1>Categoría: ${elemento.categoría}
            <h3>Código de objeto: ${elemento.id}</h3>
            <p>$${elemento.precio}</p>

            <button class="button-buy">Añadir al carro</button>
        </div>

        `;
    
    
    dom.appendChild(item);
    });
}

forEachHola(base_datos);