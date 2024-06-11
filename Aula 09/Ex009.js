
function verificar(){
    let pais = document.querySelector('#pais').value
    let res = document.querySelector('#res')

    if(pais == 'Brasil'){
        res.innerHTML = `<p>Voce e Brasileiro!</p>`
    } else {
        res.innerHTML = `<p>Voce e Estrageiro!</p>`
    }
}





