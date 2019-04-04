const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai) // Criou objeto filha e instaciou como subclasse de pai

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)

console.log(Object.keys(filha1)) //Não mostra os valores do elemento pai
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log('Elementos da propria classe: ' + key) : console.log(`Recebidos por herança: ${key}`)
}