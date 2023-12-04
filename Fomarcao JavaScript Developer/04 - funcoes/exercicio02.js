function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * juros/100))
}

//console.log(aplicarDesconto(100,10));


(function escolhaPagamento(numero){
    valorProduto = 100;
    formaPagamento = numero;
    return;
})(4);    

function main(){
    /*    
    1 - Débito
    2 - Dinheiro ou Pix
    3 - 2 vezes
    4 - Mais de duas vezes
    */
    
        if (formaPagamento === 1) {
            console.log(aplicarDesconto(valorProduto, 10));
        } else if (formaPagamento === 2){
            console.log(aplicarDesconto(valorProduto, 15));
        } else if (formaPagamento === 3){
            console.log(valorProduto);
        } else {
            console.log(aplicarJuros(valorProduto, 10));
        };
    };

main();