let list = document.querySelectorAll(".item");
let prox = document.querySelector(".prox");
let ante = document.querySelector(".ante");

let count = list.length
let ativo = 0

prox.onclick = () => {
    let ativoOld = document.querySelector('.ativo')
    ativoOld.classList.remove("ativo")
    
    ativo = ativo >= count -1? 0 : ativo + 1
    list[ativo].classList.add("ativo")
}

ante.onclick = () => {
    let ativoOld = document.querySelector(".ativo")
    ativoOld.classList.remove("ativo")
    
    ativo = ativo <= 0 ? count -1 : ativo - 1
    list[ativo].classList.add("ativo")
}

let audio = new Audio("click-sound.mp3"); // Certifique-se de que esse arquivo existe na pasta do projeto

document.querySelector(".prox").addEventListener("click", () => {
    audio.play(); // Toca o som ao avançar
    proximoSlide();
});

document.querySelector(".ante").addEventListener("click", () => {
    audio.play(); // Toca o som ao voltar
    slideAnterior();
});

function criarBolha() {
    const bolha = document.createElement("div");
    bolha.classList.add("bolha");

    let tamanho = Math.random() * 80 + 20; // Bolhas entre 20px e 100px
    bolha.style.width = `${tamanho}px`;
    bolha.style.height = `${tamanho}px`;

    bolha.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    bolha.style.animationDuration = `${Math.random() * 5 + 3}s`; // Tempo de subida aleatório

    document.querySelector(".bolhas").appendChild(bolha);

    setTimeout(() => {
        bolha.remove();
    }, 8000); // Remove as bolhas depois que elas desaparecem
}

// Criar bolhas a cada 400ms
setInterval(criarBolha, 400);
