// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr1, filho.attr2)


const carro = {
    velAtual: 0,
    velMax: 200,
    
    acelerarMais(aceleracao){
        if(this.velAtual + aceleracao <= this.velMax){
            this.velAtual += aceleracao
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing (tem o mesmo atributo do obj pai, entao o reescreve)
}

const volvo = {
    modelo: 'V40',
    
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabelece relação de herança
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())