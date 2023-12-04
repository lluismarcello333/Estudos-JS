class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const luiz = new Pessoa();
console.log(luiz);

luiz.nome = 'Luiz Marcelo';
luiz.idade = 31;

const rachel = new Pessoa();

rachel.nome = 'Rachel de Araujo';
rachel.idade = 36;

console.log(luiz);
console.log(rachel);

luiz.descrever();
rachel.descrever();
