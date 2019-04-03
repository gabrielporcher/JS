function Carro(velocidadeMaxima = 200, aceleracao = 5){
    //atributo privado (pertence apenas a função, não pode ser acessado depois)
    let velocidadeAtual = 0

    //metodo publico (PUBLICO É VISIVEL FORA DA FUNÇÃO)
    // para ser público (VISIVEL FORA DO ESCOPO DA FUNÇÃO) precisa do THIS
    this.acelerar = function () {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima){
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())