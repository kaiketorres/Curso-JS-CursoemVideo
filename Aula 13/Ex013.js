let agora = new Date()
let hora = agora.getHours()

let display = document.querySelector('.display')
let back_div = document.querySelector('.back_div')
let img_container = document.querySelector('.img_container')

display.innerHTML = (`Agora sao ${hora} horas`)


//img dia

let img_dia = document.createElement('img');
img_dia.setAttribute('class','config_img')

img_dia.src = 'fotos/dia.jpg'

//img tarde

let img_tarde = document.createElement('img');
img_tarde.setAttribute('class','config_img')

img_tarde.src = 'fotos/tarde.jpg'

//img noite
let img_noite = document.createElement('img');
img_noite.setAttribute('class','config_img')

img_noite.src = 'fotos/noite.jpg'



if(hora < 12){
    document.body.style.backgroundColor = ('#CBBB8D')
    img_container.appendChild(img_dia)
    back_div.style.backgroundColor = ('white')
} else if(hora < 18){
    document.body.style.backgroundColor = ('#A67863')
    img_container.appendChild(img_tarde)
    back_div.style.backgroundColor = ('white')
} else{
    document.body.style.backgroundColor = ('#464948')
    img_container.appendChild(img_noite)
    back_div.style.backgroundColor = ('white')
}
