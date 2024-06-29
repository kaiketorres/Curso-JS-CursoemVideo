let amigo = {
    nome: 'kaike',
    sexo: 'm',
    peso: 80.00,
    engordar(p){

        this.peso += p
        
    }
}

amigo.engordar(3)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`)