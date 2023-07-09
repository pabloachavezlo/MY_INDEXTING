function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <section class="header">
            <div class="logo">
                <img src="./img/Logo_en_blanco-removebg-preview.png" alt="">
            </div>
            <div class="names">
                <ul>
                    <li><a href="./Criptos.html">Criptomonedas</a></li>
                    <li><a href="./NFTS.html">NFTS</a></li>
                    <li><a href="#">About US</a></li>
                    <li><img src="./img/carrito.png" alt=""></li>
                    <li><a href="#">Ajustes</a></li>
                </ul>
            </div>

            <button class="toggle-btn" onclick="toggleSidebar()">Mostrar Contenido</button>
        </section>
    `;

    return barra;

}

enviar_barra();
