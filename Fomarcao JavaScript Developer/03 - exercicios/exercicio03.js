/*

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de  desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiquera mais juros de 10%
*/

const produto = 100;
const formaPagamento = 4;
const formaPagamentoDebito = produto - (produto * 0.1);
const formaPagamentoDinheiroPix = produto - (produto * 0.15);
const formaPagamento2Vezes = produto;
const formaPagamentoMaisDe2Vezes = produto + (produto * 0.1);

/*
1 - Débito
2 - Dinheiro ou Pix
3 - 2 vezes
4 - Mais de duas vezes
*/

if (formaPagamento === 1) {
    console.log(formaPagamentoDebito)
} else if (formaPagamento === 2){
    console.log(formaPagamentoDinheiroPix)
} else if (formaPagamento === 3){
    console.log(formaPagamento2Vezes)
} else {
    console.log(formaPagamentoMaisDe2Vezes)
};
