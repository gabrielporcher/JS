let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Duas negações para mostrar se é V ou F

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Vai retornar o verdadeiro: ')
console.log(!!('' || null || 0 || 'Oi'))

let nome = ''
console.log(nome || 'Desconhecido') // Vai exibir o nome (se for true) ou desconhecido (se for false)
