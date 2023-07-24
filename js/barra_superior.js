function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <section class="header">
            <div class="names">
                <ul>
                    <li><a class="toggle-btn" onclick="toggleSidebar()"><img src="./img/hamburguesa.png" alt=""></a></li>
                    <li><a href="NFTS.html"><img src="./img/Logo_en_blanco-removebg-preview.png" alt=""></a></li>
                    <li><a href="./Carrito.html"><img src="./img/carrito-de-compras.png" alt=""></a></li>
                </ul>
            </div>
        </section>
    `;

}

enviar_barra();
