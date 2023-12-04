/* Exercício

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do Etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const PrecoEtanol = 5.79;
const PrecoGasolina = 6.66;
const TipoCombustivel = 'Gasolina';
const ConsumoEtanol = 10;
const ConsumoGasolina = 12;
const Distancia = 100;

const gastoEtanolTotal = (Distancia/ConsumoEtanol)*PrecoEtanol
const gastoGasolinaTotal = (Distancia/ConsumoGasolina)*PrecoGasolina

if (TipoCombustivel === 'Etanol'){
    console.log(gastoEtanolTotal.toFixed(2))
} else {
    console.log(gastoGasolinaTotal.toFixed(2))
}