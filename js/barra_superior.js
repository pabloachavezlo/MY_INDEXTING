function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <section class="header">
            <div class="logo">
                <a href="main.html"><img src="./img/Logo_en_blanco-removebg-preview.png" alt=""></a>
            </div>
            <div class="names">
                <ul>
                    <li><a class="toggle-btn" onclick="toggleSidebar()"><img src="./img/Menu2.png" alt=""></a></li>
                    <li><a href="./profile.html"><img src="./img/perfil3.2.png" alt=""></a></li>
                    <li><a href="./Carrito.html"><img src="./img/carrito.png" alt=""></a></li>
                    <li><a href="./ajustes.html"><img src="./img/settings_logo.png"></a></li>
                </ul>
            </div>
        </section>
    `;

    return barra;

}

enviar_barra();
