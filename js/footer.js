function llamar_footer() {
    
    let pie_pagina = document.querySelector("#footer");
    pie_pagina.innerHTML = `
    
    <div class="pie_de_pagina">
        <div class="h1-añadido">
            <h1>Quiénes somos?</h1>
        </div>
        <div class="p-añadido">
            <p>Somos una empresa que busca darle a conocer al público
                general acerca de las ventajas de invertir en los diferentes
                y nuevos mercados digitales que van surgiendo cada día y cómo
                estos pueden cambiar la manera de invertir nuestro dinero 
                de una manera más sencilla, segura y en un sitio de confianza.
            </p>
            <h4>Como empresa contamos con 4 objetivos principales: </h4>
        </div>
        <div class="añadido">
            <div class="caja1">
                <h3>Ventajas</h3>
                <p>
                    Somos el único sitio en todo internet que maneja diferentes mercados en un sólo sitio web, ya
                    que nuestro enfoque es poder enseñarle a los usuarios que en internet
                    existen muchas herramientas para poder incrementar tú dinero.
                </p>
            </div>
            <div class="caja2">
                <h3>Aprendizaje</h3>
                <p>
                    Te enseñamos las difrentes maneras en cómo puedes aprovechar tú
                    dinero, los diferentes mercados en los que puedes hacerlo y te enseñamos
                    cómo dominarlos.
                </p>
            </div>
            <div class="caja3">
                <h3>Seguridad</h3>
                <p>                    
                    Nuestro sitio web es de los más seguros que hay, esto porque nosotros
                    utilizamos métodos de pagos autorizados y con los que el usuario quizás ya
                    se sienta familiarizado; Además, nuestros productos son 100% reales y no mantenemos
                    niguna comisión extra en el pago que el usuario realice por sus productos.
                </p>
            </div>
            <div class="caja4">
                <h3>Cumplir con la sociedad</h3>
                <p>
                    Nuestro último objetivo es poder cumplir con nuestros usuarios, por ello
                    es que nosotro procuramos al cliente por encima de todo, procuramos que este
                    pueda cumplir su meta de aumentar sus ganancias sin tener que recurrir a un segundo trabajo
                    o a un tercero incluso, esto por medio de las inversiones.
                </p>
            </div>
        </div>

        <img src="./img/Logo_en_blanco-removebg-preview.png">

    </div>
    `;
}

llamar_footer();