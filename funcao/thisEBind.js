const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar //Aqui o this se perde, ao criar uma const falar e chamar o metodo falar, ele procura o this.saudacao da const falar, e nao do objt. pessoa.
falar() //conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind vincula a func. falar ao objeto pessoa
falarDePessoa()

