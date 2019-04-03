const produto = new Object
produto.nome = 'Cadeira' //Coleção dinamica, nao precisa existir o atributo para atribuir valor, atribuindo ele cria o atributo automaticamente
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { //Obj dentro do obj
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //Obj e Array dentro do obj
        nome: 'Júnior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }]
}

//carro.proprietario.endereco.numero = 1200
console.log(carro.proprietario.endereco.numero)
console.log(carro.condutores[0].nome)