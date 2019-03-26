const nome = 'Leirbag'
const concatenacao = 'Olá ' + nome + ' !'

const template = ` Olá  ${nome}! ` //Isso é um template string

 console.log(concatenacao, template)

 //Serve para expressões
 console.log(`1 + 1 = ${1 + 1}`)

 const up = text => text.toUpperCase()
 console.log(`Ei...${up('cuidado')}!`)
