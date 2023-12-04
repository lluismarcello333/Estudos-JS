// Boolean - Usamos para representar Verdadeiro ou Falso

const camisetaLuizAzul = true;
const camisetaMarcelo = false;

/* Condicionais é quando verificamos se uma situação é verdadeira ou falsa

10 < 5;
10 > 8;
10 /= 10;
10 /= 9;
*/

const numero = 0;

eNumeroPar = (numero % 2) === 0;

//console.log(eNumeroPar);

/* Tipos de Operadores de Igualdade
 = - Atribuição
 == - Ignora o tipo da Variável.
 === - Usamos para comparar o tipo e o valor
*/

/* If e Else */


if (numero === 0) {
    console.log('O número é inválido.')
} else if (eNumeroPar) {
    console.log('Executei')
} else {
    console.log('O numero', numero, 'é ímpar.')
}

// Podemos, também, utilizar a seguinte lógica

if (!eNumeroPar) {
    console.log('Outra forma de dizer que o número é ímpar.')
}