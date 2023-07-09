function insertar_BarraLateral() {

    let enviar = document.querySelector(".barralateral")

    enviar.innerHTML = `

    <div class="sidebar">
        <a class="toggle-btn" onclick="toggleSidebar()"><p>☒</p></a>
        <div class="sidebar2">
            <img src="./img/Logo_en_blanco-removebg-preview.png">
            <ul>
                <li><a href="./Criptos.html">Criptomonedas</a></li>
                <li><a href="./NFTS.html">NFTS</a></li>
                <li><a href="#">About US</a></li>
                <li><a href="#">Ajustes</a></li>
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