//Vai funcionar quase sempre, mas as vezes o THIS da ruim
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log('Meu nome é '+ this.nome)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//Nunca da ruim
const criarPessoa = nome =>{
    return{
        falar: () => console.log('Meu nome é '+ nome)
    }
}

const p2 = criarPessoa('João')
p2.falar()

//A factory pode fazer a mesma coisa que esses dois construtores

function Individuo(nome){
    this.nome = nome //This não é necessário na factory, porém nao vai funcionar acesso fora da func.
    //nome

    this.falar = function(){
        console.log('Meu nome é '+this.nome)
    }
}

const p3 = new Individuo('Gabriel')
p3.falar()
console.log(p3.nome)