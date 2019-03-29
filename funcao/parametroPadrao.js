// estrategia 1 para gerar valor padrão
function soma1(a,b,c){ //atribui valor recebido OU 1, para tratar erros
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) //passando 0 não funciona, pois retorna falso.

// estrategia 2,3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a != undefined ? a: 1 //a = a se a for diferente de undefined, se não ele será 1
    b = 1 in arguments ? b : 1 // dentro de arguments existe o indice 1? se existir b = b, se não b = 1
    c = isNaN(c) ? 1 : c //Se a variavel C for um número, c = c. Se não, c = 1 MELHOR OPÇÃO
    return a + b + c
}

console.log(soma2(), soma2(0,0,0), soma2(3))

//Valor padrão JavaScript 2015 //PREFERÍVEL\\
function soma3 (a=1, b=1, c=1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))