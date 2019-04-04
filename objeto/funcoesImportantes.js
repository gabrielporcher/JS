const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna os atributos da classe
console.log(Object.values(pessoa)) // Retorna os valores atribuidos a classe 
console.log(Object.entries(pessoa)) // Retorna atributos e valor atribuido

Object.entries(pessoa).forEach(([chave, valor]) => { // Destructuring, serve para desestruturar array (o entries retorna tudo dentro do array)
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) // Define características de propriedade para uma classe

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAscript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2) //Mistura tudo em um obj só. Se tem 2 variaveis iguais, ele usa o ultimo parametro
console.log(obj)
