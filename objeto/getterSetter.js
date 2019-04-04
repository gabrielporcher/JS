const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor++
    },

    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor) // Não precisar ser sequencia.getValor(), pois ao acessar o valor o JS já retorna o que esta na get valor
sequencia.valor = 1000 // O mesmo serve para o setter
console.log(sequencia.valor)
sequencia.valor = 900 //Não vai deixar diminuir porcausa do if
console.log(sequencia.valor)