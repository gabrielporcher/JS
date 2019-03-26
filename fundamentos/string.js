const escola = "Cod3r"

console.log(escola.charAt(4)) // Retornara a letra da posição 4 do string.

console.log(escola.charCodeAt(3)) 

console.log(escola.indexOf('3'))

console.log(escola.substring(1)); //Começa partindo da posição 1 da string

console.log(escola.substring(0,3)) //do indice 0 ao 3

console.log('Video Aula '.concat(escola).concat("!"))
console.log('Video Aula ' + escola + '!' ) //Igual ao concat acima, porém mais parecido com o java. Resultado final é o mesmo.

console.log(escola.replace(3, 'e')) //troca o string de posição 3 por 'e'

console.log('Ana, Maria, Pedro'.split(',')) //transforma string em array, o caracter dentro do split determina o ponto da separação das strings
