const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Desafio: Encontrar a mulher Chinesa com menor salário
const mulher = f => f.genero === 'F'
const pais = f => f.pais === 'China'
const menorSalario = (f, fatual) => {
    return f.salario < fatual.salario ? f : fatual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios.salario)

    const func = funcionarios.filter(mulher).filter(pais).reduce(menorSalario)
    console.log(func)
})