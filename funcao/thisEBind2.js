function Pessoa(){
    this.idade = 0

    setInterval(function(){ //dispara outra função que ativa algo em determinado tempo
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // Sem o bind(this), ele retorna o this idade para a func set Interval
}

new Pessoa 

function PessoaNova(){
    this.idade=0
    const self = this // Desta maneira o THIS nao varia. Aí nao precisa usar o bind.

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new PessoaNova