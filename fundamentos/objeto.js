const prod1 = {} //chaves representam objetos
prod1.nome = 'Nome do megazord'
prod1.preco = 499.85
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blabla:2 //objetos dentro de um obj.
        }
    }
}
console.log(prod2)