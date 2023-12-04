/*
Faça um programa que recebe N (quantidade de números) e seus respectivos valores.
Imprima o maior número par e o menor número ímpar.

    Exemplo:
        Entrada: 
            5
            3
            4
            1
            10
            8

        Saída: 
            Maior número par: 10
            Menor número ímpar: 1    
*/

const {gets} = require('./funcoes-auxiliares-desafio02.js')

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if(numero % 2 === 0){
        if(maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero
        };
    } else {
        if(menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        };
    }; 
};

console.log('Maior número par:',maiorNumeroPar);
console.log('Menor número ímpar:',menorNumeroImpar);

