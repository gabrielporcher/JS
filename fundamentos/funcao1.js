//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,5)
imprimirSoma('ue','pa') // concatena as duas strings
imprimirSoma(2)
imprimirSoma(2,2,4,5,6,9) // Soma só os dois primeiros, o resto whatever

//Função com retorno
function soma(a, b =0){
    return a + b
}
console.log(soma(2,3))
soma(2,3) // Retorna o resultado, mas não mostra