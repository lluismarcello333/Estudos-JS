// constructor

class Pessoa{
    nome;
    idade;
    anoDenascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2023 - idade; 
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

const luiz = new Pessoa('luiz', 31);

const rachel = new Pessoa('rachel', 36);

console.log(rachel);