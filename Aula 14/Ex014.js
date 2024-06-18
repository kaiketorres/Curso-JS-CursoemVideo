
    function verificar() {

        let display = document.querySelector('.display')
        let img_div = document.querySelector('.img_div')
        let feminino = document.querySelector('#feminino')
        let masculino = document.querySelector('#masculino')
        let ano = document.querySelector('#ano').value
        let foto = document.createElement('img')
        foto.setAttribute('class', 'config_img')
       
        img_div.innerHTML = '';

        let resultadoCalculo = calcularIdade(ano, display, img_div, foto )

    
        if (feminino.checked && resultadoCalculo <= 12) {
            display.innerHTML = `Detectamos crianca mulher de ${resultadoCalculo} anos `;
            foto.src = 'Fotos/crianca_menina.jpg'
            img_div.appendChild(foto)
            return menina
        } else if (masculino.checked && resultadoCalculo <= 12) {
            display.innerHTML = `Detectamos crianca homem de ${resultadoCalculo} anos `;
            foto.src = 'Fotos/crianca_menino.jpg'
            img_div.appendChild(foto)
        } else if (feminino.checked && resultadoCalculo <= 25) {
            display.innerHTML = `Detectamos adolecente mulher de ${resultadoCalculo} anos`;
            foto.src = 'Fotos/adolecente_menina.jpg'
            img_div.appendChild(foto)
        } else if (masculino.checked && resultadoCalculo <= 25) {
            display.innerHTML = `Detectamos adolecente homem de ${resultadoCalculo} anos`;
            foto.src = 'Fotos/adolecente_menino.jpg'
            img_div.appendChild(foto)
        } else if (feminino.checked && resultadoCalculo <= 65) {
            display.innerHTML = `Detectamos mulher adulto de ${resultadoCalculo} anos`;
            foto.src = 'Fotos/adulto_mulher.jpg'
            img_div.appendChild(foto)
        } else if (masculino.checked && resultadoCalculo <= 65) {
            display.innerHTML = `Detectamos homem adulto de ${resultadoCalculo} anos`;
            foto.src = '    Fotos/adulto_homem.JPG'
            img_div.appendChild(foto)
        }

    else if (feminino.checked && resultadoCalculo <= 130) {
        display.innerHTML = `Detectamos mulher idosa de ${resultadoCalculo} anos`;
        foto.src = 'Fotos/idoso_mulher.jpg'
        img_div.appendChild(foto)
    } else if (masculino.checked && resultadoCalculo <= 130) {
        display.innerHTML = `Detectamos homem idosa de ${resultadoCalculo} anos`;
        foto.src = 'Fotos/idoso_homem.jpg'
        img_div.appendChild(foto)
    }

    }


    function calcularIdade(ano, display, img_div, foto ) {

        let idade = 2024 - ano
        
        if(idade >= 1 && idade <= 130){
            return idade
        } else {
            display.innerHTML = `Atencao este valor nao e valido`;
            foto.src = 'Fotos/ponto.png'
            img_div.appendChild(foto)
        }
    }


