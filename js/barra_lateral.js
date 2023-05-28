function insertar_BarraLateral() {
    
    let barra_lateral = `
    
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
        <div class="ajustes">
            <a href="./settings.html">
                <img src="./img/settings_logo.png" alt="">
            </a>
        </div>
    </div>
    
    `;

    return barra_lateral;

}

function enviar_barraLateral() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = insertar_BarraLateral;

}

enviar_barraLateral();