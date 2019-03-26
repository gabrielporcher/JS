let valor //não inicializada
console.log(valor) //Undefined
valor = null //Null = ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined, se precisar anular valor atribuir null
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)

