// rest = juntar ;; spread = separar

// usar Spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 2890.00
}

const clone = {
    ativo: true,
    ...funcionario // spread
}

console.log(clone)

// usar Spread no array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)

// Rest usado como parametros em função