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
                y nuevos mercados digitales que van surgiendo cada día y como
                estos pueden cambiar la manera de aprovechar nuestro dinero e 
                invertirlo de una manera sencilla y en un sitio de confianza.
            </p>
            <h4>Como empresa contamos con 4 objetivos principales: </h4>
        </div>
        <div class="añadido">
            <div class="caja1">
                <h3>Ventajas</h3>
                <p>Somos el sitio que te da mejores oportunidades financieras
                    con diferentes opciones para poder incrementar
                    tu dinero de manera rápida y sencilla de aprender, además somos un sitio de confianza ya que muchos de nuestros usuarios nos recomiendan.
                </p>
            </div>
            <div class="caja2">
                <h3>Aprendizaje</h3>
                <p>Somos el sitio que te da mejores oportunidades financieras
                    además tendrás diferentes opciones para poder incrementar
                    tu dinero de manera rápida y sencilla de aprender.
                </p>
            </div>
            <div class="caja3">
                <h3>Seguridad</h3>
                <p>Somos el sitio que te da mejores oportunidades financieras
                    además tendrás diferentes opciones para poder incrementar
                    tu dinero de manera rápida y sencilla de aprender.
                </p>
            </div>
            <div class="caja4">
                <h3>Tranquilidad económica</h3>
                <p>Somos el sitio que te da mejores oportunidades financieras
                    además tendrás diferentes opciones para poder incrementar
                    tu dinero de manera rápida y sencilla de aprender.
                </p>
            </div>
        </div>
    </div>
    `;
}

llamar_footer();