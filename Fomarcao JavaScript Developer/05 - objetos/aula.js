

const luiz = {
    nome: 'Luiz Marcelo',
    idade: 30
}

const pessoa = {
    nome: 'Rachel de Araujo',
    idade: 36,
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

console.log(luiz.nome);
console.log(luiz.idade);
console.log(luiz);

luiz.altura = 1.80.toFixed(2);
console.log(luiz);

delete luiz.idade;

console.log(luiz);

// Uma função dentro de um objeto, chamamos de método.


pessoa.descrever();

pessoa.nome = 'Mario Santana';
pessoa.idade = 53;

pessoa.descrever();

// Acessando dinamicamente valores de um Objeto

const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);

pessoa['nome'] = 'teste';
console.log(pessoa);

pessoa.nome = 'Malone';
console.log(pessoa);

