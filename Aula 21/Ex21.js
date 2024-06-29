
let adicionado = document.querySelector('#adicionado')
let resultado = document.querySelector('#resultado')
let valorInput = document.querySelector('#valorInput')
let vetor = []

function adicionarValor() {

    let valor = Number(valorInput.value)

    if(valorInput.value == ''){
        alert('Voce deve adicionar um valor numerico primeiro ')
    } else if (valor < 0 || valor > 100) {
        alert('O numero tem que ser entre 1 e 100')
    } else if (vetor.includes(valor)) {
        alert('Esse valor já foi adicionado')
    } else {
        let item = document.createElement('option')
        adicionado.appendChild(item)
        item.innerHTML = (`Valor ${valor} adicionado`)
        vetor.push(valor)

        valorInput.value = ''
    }

    item_2.innerHTML = ''

}

let item_2 = document.createElement('option')

function finalizar() {
    

    if(vetor.length === 0){
        alert('Voce deve adicionar um valor numerico primeiro antes de finalizar')
    } else {

        resultado.appendChild(item_2)
        let tamanhoVetor = vetor.length
        let maior = Math.max(...vetor)
        let menor = Math.min(...vetor)

        let soma = 0
        
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
        }

        let media = soma / vetor.length




        item_2.innerHTML = `
            Ao todo temos ${tamanhoVetor} números cadastrados.<br>
            O menor valor informado foi ${menor}.<br>
            O maior valor informado foi ${maior}.<br>
            Somando todos os valores temos ${soma}. <br>
            A media dos valores digitado e ${media}
        `
}
}


document.querySelector('body').addEventListener('keydown', function (event) {
    let tecla = event.key
    if (tecla == 'Enter') {
        adicionarValor()
    }
})









