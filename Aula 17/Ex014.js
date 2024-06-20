function tabuada(){
    let valorInput = document.querySelector('#valorInput').value
    let resultado = document.querySelector('.resultado')

    resultado.innerHTML = ""

    for(let i = 0; i <= 10; i++){
       
       resultado.innerHTML += `${valorInput} x ${i} = ${valorInput * i} <br>` 
    }
}

document.addEventListener("keydown", function(event){
    let enter = event.key
    if(enter === 'Enter'){
        tabuada()
    }
})