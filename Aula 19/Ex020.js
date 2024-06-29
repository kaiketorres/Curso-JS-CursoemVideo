let num = [6,5,8,9,3,7]

// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])
// console.log(num[5])


// for(let i = 0; i < num.length; i++){
//     console.log(`a posicao ${i} tem o valor ${num[i]}`)
// }

for(let i in num){
    console.log(`a posicao ${i} tem o valor ${num[i]}`)
}