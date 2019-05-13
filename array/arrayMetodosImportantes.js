const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstapen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // Insere um novo elemento na primeira posição do array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') 
console.log(pilotos) // Vai adicionar na posição 2

// Remover
pilotos.splice(3, 1) // Remover 1 elemento do indice 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Novo array, a partir do indice indicado
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) // Primeiro elemento é o indice de começo para copiar o array, e o segundo é para parar
console.log(algunsPilotos2)