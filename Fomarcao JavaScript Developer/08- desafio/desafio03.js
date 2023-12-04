/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transeferido é calculado da seguinte maneira:
 
    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios.

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
*/

const {gets} = require('./funcoes-auxiliares-desafio03');

valorBruto = gets();
adicionalBeneficios = gets();

function calcularPorcentagem(valorBruto, percentualImposto){
    return salario = valorBruto * (percentualImposto / 100);
}

function pegarAliquota(valorBruto){
    
    if(valorBruto > 0 && valorBruto < 1100){
        return 5;
    }else if(valorBruto >= 1100 && valorBruto <= 2500){
        return 10;
    }else if(valorBruto > 2500){
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorBruto);

const valorImposto = calcularPorcentagem(valorBruto,aliquotaImposto);

const valorTransferir = valorBruto - valorImposto + adicionalBeneficios;

console.log(valorTransferir);