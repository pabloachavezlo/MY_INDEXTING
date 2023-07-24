function insertar_BarraLateral() {

    let enviar = document.querySelector(".barralateral")

    enviar.innerHTML = `

    <div class="sidebar">
        <a class="toggle-btn" onclick="toggleSidebar()"><img src="./img/simbolo-x.png"></a>
        <div class="sidebar2">
            <img src="./img/Logo_en_blanco-removebg-preview.png">
            <ul>
                <li><a href="./NFTS.html">NFTS</a></li>
                <li><a href="./Criptos.html">Criptomonedas</a></li>
            </ul>
        </div>
        
        <div class="contacto">
            <h4>Contacto: </h4>
            <div class="contacto2">
                <ul>
                    <li><p>Teléfono: 4171-1309</p></li>
                    <li><p>Correo: albertochalop@gmail.com</p></li>
                </ul>
            </div>
        </div>

        <div class="sidebar3">
            <ul>
                <li><a href="https://www.instagram.com/_.pchavezlpz._/"><img src="./img/instagram.png"></a></li>
                <li><a href="https://github.com/pabloachavezlo"><img src="./img/signo-de-github.png"></a></li>
                <li><a href="https://www.facebook.com/pabloalbert.chavezlopez/"><img src="./img/facebook.png"></a></li>
            </ul>
        </div>

    </div>
    
    `;

    return barra_lateral;

}

insertar_BarraLateral();

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
}