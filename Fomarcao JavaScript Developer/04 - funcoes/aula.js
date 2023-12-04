

function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Luiz');
sayMyName('Marcelo');

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10))

//Exemplo de Juros

function icrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor
    return valor + valorDeAcrescimo;
}

console.log(icrementarJuros(100,10));
console.log(icrementarJuros(100,15));
console.log(icrementarJuros(100,20));

// -----------------------------------------

// Como organizar as funções

function calcularJuros(){

}

// O código principal fica dentro de uma função chamada main()

function main(){
    console.log('Programa Principal')
    calcularJuros();
}

main();