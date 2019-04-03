function getPreco(imposto = 0, moeda = 'R$'){
    //return moeda, this.preco * (1 - this.desc) * (1+ imposto)
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

//Diferença entre call e apply é a forma como passa os parametros

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$')) //Call passa diretamente os parametros a função, primeiro é o contexto e depois parametros a passar pela função


console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$'])) //Apply, primeiro parametro é o objeto do contexto, e depois o resto