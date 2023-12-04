var var1 = 10;
var var2 = 'Teste';
var var3 = 20;

console.log(var1 + var2)
console.log(var1 + var3)

/* A linguagem Js é fracamente tipada

* Não é necessário declarar explicitamente o tipo de variável, o que torna o código mais conciso e flexível.
* As variáveis podem mudar de tipo facilmente, o que pode ser útil durante o desenvolvimento.
* A flexibilidade tipicamente leva a um desenvolvimento mais rápido em comparação com linguagens fortemente tipadas, especialmente em prototipagem rápida ou projetos menores.
* Para iniciantes, a flexibilidade do JavaScript pode ser menos intimidante e mais fácil de entender, pois não há necessidade de entender detalhes complexos de tipagem estática.
* Evita erros relacionados à tipagem que podem ser desafiadores para novos desenvolvedores.
* Às vezes, ao interagir com APIs externas ou realizar operações dinâmicas, a fraqueza de tipagem pode ser vantajosa, pois não exige uma correspondência rigorosa de tipos.
* Mudanças na estrutura do código podem ser feitas com menos esforço, já que a tipagem não impõe muitas restrições.
* Não há necessidade de declarar tipos em várias partes do código, o que pode reduzir a quantidade de código necessário.

No entanto, essa flexibilidade também pode ser uma desvantagem em certos cenários:

* A fraqueza de tipagem pode levar a erros difíceis de identificar durante o desenvolvimento ou em tempo de execução.
* Problemas devido à natureza dinâmica podem ser difíceis de rastrear e corrigir.
* A ausência de tipagem estática pode dificultar a compreensão imediata do código, especialmente em projetos maiores ou com equipes grandes.

A escolha entre uma linguagem de tipagem forte ou fraca depende das necessidades do projeto, do contexto de desenvolvimento e das preferências da equipe. 
Algumas equipes podem preferir a robustez e segurança da tipagem forte, enquanto outras podem apreciar a agilidade e flexibilidade da tipagem fraca.

*/

teste();
teste1();

function teste() {
    console.log('teste')
}

var teste1 = function() {
    console.log('teste1')
}    
 
//Hoisting: Declarações de variáveis usando var são "elevadas" para o topo do seu contexto de execução.

/* 
var, let e const são palavras-chave usadas para declarar variáveis em JavaScript, 
mas têm diferenças significativas no que diz respeito ao escopo, reatribuição e mutabilidade. 
*/


if(true){
    var var5 = 10; // essa declaração funcionará pois sofrerá o Hoisting. A declaração da variável será lida no topo do código. Esse comportamento só não acontece na declaração de uma função.
}

console.log(var5);

// Var = Variáveis declaradas com var têm escopo de função ou escopo global (se declaradas fora de uma função).

if (true) {
    let var6 = 11;
}

console.log(var6)

// let = Variáveis declaradas com let têm escopo de bloco, o que significa que são limitadas ao bloco em que foram declaradas.

const var7 = 12;

/* 
const = Similar ao let, tem escopo de bloco. Variáveis declaradas com const devem ser atribuídas a um valor 
na declaração e não podem ser reatribuídas a outro valor posteriormente.
*/
