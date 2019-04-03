//Factory é uma função que retorna um objeto sem precisar do NEW

//Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// Desafio factory criar passando parametros
function criarIndividuo(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    return{
        nome,
        sobrenome
    }
}

console.log(criarIndividuo('Gabriel', 'Porcher')) //Funcionou!

//Forma da aula
function criarPessoa2(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}

console.log(criarPessoa2('Gabriel', 'Porcher'))