/* 

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso
- Entre 18.5 e 25 = Peso normal
- Entre 25 e 30 = Acima do peso
- Entre 30 e 40 = Obeso
- Acima de 40 = Obesidade Grave
*/

const peso = 70
const altura = 1.70
const IMC = peso / (altura * altura)

console.log(IMC.toFixed(2))

if (IMC < 18.5){
    console.log('Está abaixo do peso!')
} else if (IMC >= 18.5 && IMC < 25){
    console.log('Peso normal! Continue assim.')
} else if (IMC >= 25 && IMC < 30){
    console.log('Está acima do peso!')
} else if (IMC >= 30 && IMC < 40){
    console.log('Está Obeso! Procure um nutricionista')
} else {
    console.log('Obesidade Grave! Procure um nutricionista')
}