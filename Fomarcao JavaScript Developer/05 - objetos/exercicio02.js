/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do 
seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return (this.peso / (this.altura * this.altura));
    }

    descrever(){
        if (this.calcularIMC() < 18.5){
            return (`Meu nome é ${this.nome}. O valor do meu IMC é ${this.calcularIMC()}. Estou abaixo do peso.`);
        } else if (this.calcularIMC() >= 18.5 && this.calcularIMC() < 25){
            return (`Meu nome é ${this.nome}. O valor do meu IMC é ${this.calcularIMC()}. Meu peso está normal.`);
        } else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30){
            return (`Meu nome é ${this.nome}. O valor do meu IMC é ${this.calcularIMC()}. Estou acima do peso.`);
        } else if (this.calcularIMC() >= 30 && this.calcularIMC() < 40){
            return (`Meu nome é ${this.nome}. O valor do meu IMC é ${this.calcularIMC()}. Obesidade.`);
        } else {
            return (`Meu nome é ${this.nome}. O valor do meu IMC é ${this.calcularIMC()}. Obesidade Grave.`);
        };        
    };
    
};

const jose = new Pessoa('José', 70, 1.75);
const luiz = new Pessoa('Luiz Marcelo', 100, 1.80);
const rachel = new Pessoa('Rachel de Araujo', 60, 1.60);



console.log(jose);
console.log(jose.descrever())
console.log(luiz.descrever())
console.log(rachel.descrever())
