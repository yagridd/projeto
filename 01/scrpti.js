// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    const aberto = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.textContent = aberto ? "✕" : "☰";
});


// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ACORDEÃO / PERGUNTAS

const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(botao => {

    botao.addEventListener("click", () => {

        const conteudo = botao.nextElementSibling;

        const aberto = botao.getAttribute("aria-expanded") === "true";

        botao.setAttribute("aria-expanded", String(!aberto));

        if (conteudo) {

            conteudo.style.maxHeight = aberto
                ? null
                : conteudo.scrollHeight + "px";

        }

    });

});


// ANIMAÇÃO AO ROLAR

const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(elemento => {

    observador.observe(elemento);

});


// ANO AUTOMÁTICO

const ano = document.querySelector("#ano");

if (ano) {

    ano.textContent = new Date().getFullYear();

}


// BOTÃO VOLTAR AO TOPO

const voltarTopo = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        voltarTopo.classList.add("visible");

    } else {

        voltarTopo.classList.remove("visible");

    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});