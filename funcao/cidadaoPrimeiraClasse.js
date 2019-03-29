// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function func1(parametros){
    //instruções
}

//armazenar em uma variavel
const func2 = function(parametros){
    //instruções
}

//armazenar em um array
const array = [function(parametros){
    //instruções
}, func1, func2] //Dentro do array está a função criada e mais as outras duas

const array2 = [function(c,d){return c+d}, func1, func2]
console.log(array2[0](2,3)) //Somou

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}
run(function() {console.log('Executando...')})

//Função pode retornar uma função
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //Para executar a função de dentro
const cincoMais = soma(2,3)
cincoMais(4)//Tambem funciona