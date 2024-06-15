let executando = false;

let acertos = 0;



const startBotao = document.querySelector("#btn--start");

const sortear = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit")

const placarDer = document.querySelector(".num--der")



startBotao.addEventListener("click", startGame)


function startGame() {


    if (executando) {
        alert("jogo ja esta em andamento...")
        return
    } else {
        let numAleatorio = Math.floor(Math.random() * 20 + 1)
        sortear.textContent = numAleatorio
        executando = true
    }

}

function verificarResposta(palpite) {


    let numAnterior = Number(sortear.textContent);
    sortear.textContent = Math.floor(Math.random() * 20 + 1)

    let numNovo = sortear.textContent

    if (palpite === "alto" && numNovo > numAnterior) {
        acertos++
        verificarVitoria()

    } else if (palpite === "baixo" && numNovo < numAnterior) {
        acertos++
        verificarVitoria()

    } else {
        gameover()
    }


}

function verificarVitoria() {
    if (acertos >= 3) {
        placarVit.textContent++
            executando = false
        sortear.textContent = ""
        acertos = 0

    }
}

function gameover() {
    placarDer.textContent++
        executando = false
    sortear.textContent = ""
    acertos = 0
}