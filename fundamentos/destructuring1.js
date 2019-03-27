const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

console.log(pessoa.nome , pessoa.idade)

const {nome: n , idade: i} = pessoa
console.log(n, i)

const { endereco: {logradouro,numero}} = pessoa
console.log(logradouro, numero)