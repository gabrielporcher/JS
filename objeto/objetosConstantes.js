const pessoa = {nome: 'João'} //Armazenou joão na posição X
pessoa.nome = 'Pedro' // Armazenou Pedro na posição Y  (Não mudou a const pessoa, mas sim pessoa.nome)
console.log(pessoa) //Apontou para Y

//pessoa = {nome: 'Ana'} //Aqui vai dar erro, não da pra mudar a CONSTANTE

Object.freeze(pessoa) //Congelou a posição Y 
pessoa.nome = 'Maria' // Armazenou na posição Z
console.log(pessoa) // Apontou para Y

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome =  'Maria'
console.log(pessoaConstante)