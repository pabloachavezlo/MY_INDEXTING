function insertar_Barra() {
    
    let barra = `
    
    <div class="logos">
        <div class="menu">
            <button><img src="./img/Menu-removebg-preview.png" alt=""></button>
        </div>
        <div class="principal">
            <a href="./index.html">
                <img src="./img/Logo_en_blanco-removebg-preview.png" alt="">
            </a>
        </div>
        <div class="perfil">
            <a href="./profile.html">
                <img src="./img/Perfil.png" alt="">
            </a>
        </div>
        <div class="Carrito">
            <a href="./Carrito.html">
                <img src="./img/settings_logo.png" alt="">
            </a>
        </div>
    </div>
    
    `;

    return barra;

}

function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = insertar_Barra;

}

enviar_barra();
