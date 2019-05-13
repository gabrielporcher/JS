// Object.preventExtensios    ///Não vai deixar criar novos atributos no obj
const produto = Object.preventExtensions ({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal   /// Não deixa criar atributos, nem excluir.  Mas pode mudar valor das variaveis
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 14
console.log(pessoa)

// Object.freeze /// Não deixa criar novos atributos, nem modificar os valores (No-writable)