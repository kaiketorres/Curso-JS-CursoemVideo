
function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro falta dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo invalido! Considerando PASSO 1')
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}