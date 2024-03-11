//VARIAVEIS
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

//FUNCOES
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

//document.querySelector('.box').textContent = numeroSecreto
console.log(numeroSecreto)

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor