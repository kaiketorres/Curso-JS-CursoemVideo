function tabuada() {
    let valorInput = document.querySelector('#valorInput').value
    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = ""
    if (valorInput >= 1 && valorInput <= 10) {

        for (let i = 0; i <= 10; i++) {

            let item = document.createElement('option')
            item.innerHTML = `${valorInput} x ${i} = ${valorInput * i} <br>`
            resultado.appendChild(item)

        }
    } else {
        alert('Digite um valor entre 1 e 10')
    }
}


document.addEventListener("keydown", function (event) {
    let enter = event.key
    if (enter === 'Enter') {
        tabuada()
    }
})