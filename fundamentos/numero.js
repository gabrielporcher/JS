const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.98754;
const avaliacao2 = 6.87456;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Mostrar 2 números depois da virgula.
console.log(typeof media);