const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome:'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 12.49, fragil: false }
]
/*
console.log(produtos.filter(function(p){ // p representa cada elemento do array
    return p.fragil
}))
*/

function eFragil(d){
    return d.fragil
}
// const caro = d => d.fragil /// Tambem funciona assim

function caro(p){
    return p.preco > 500
}

// const eFragil = d => d.preco > 500   /// Tambem funciona assim

let filtrado = produtos.filter(eFragil).filter(caro)
console.log(filtrado)