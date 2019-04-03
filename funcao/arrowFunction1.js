let dobro = function(a){
    return 2 * a
}

dobro = (a) => { //função arrow é sempre anônima
    return 2 * a
}

dobro = a => 2 * a //só funciona com 1 parametro
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ =>'Olá' //  _ funciona como parametro
console.log(ola())