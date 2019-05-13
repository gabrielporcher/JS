const carrinho = [ // Elementos estão em JSON 
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Carderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = e => JSON.parse(e)
// const apenasPreco = produto => produto.preco 
const apenasPreco = e => e.preco // Apenas a fim de testes

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)