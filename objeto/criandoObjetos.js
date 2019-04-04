// Usando a notação literal
const obj1 = {}

// Object em JS
console.log(typeof Object, typeof new Object) //Object é uma função que cria objetos.
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, preco, desc){
    this.nome = nome //Quando usa o this fica publico (visivel fora do obj)

    this.getPrecoComDesconto = () => {
        return preco * ( 1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Objeto.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)