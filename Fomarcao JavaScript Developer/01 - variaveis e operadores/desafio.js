/* Exercício

Faça um programa para calcular o valor de uma viagem.

Você terpa 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/

const gas = 5.79;
const consumo = 10;
const distancia = 2013;
const gastoTotal = (distancia / consumo) * gas;

console.log(gastoTotal.toFixed(2));