function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

/*
Agora o this funciona (sem precisar usar BIND ou SELF)
Porcausa da função ARROW
*/