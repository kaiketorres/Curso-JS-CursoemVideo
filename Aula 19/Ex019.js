let num = [6, 5, 8, 9]
//num[3] = 6 
// num.push(10)  
//num.sort()
//console.log(`Nosso vetor e o ${num}`)
//console.log(`o vetor tem ${num.length} posições`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor nao esta no array`)
} else {
    console.log(`o valor 8 esta na posicao ${pos}`)
} 