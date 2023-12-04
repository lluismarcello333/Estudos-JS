/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioGasKm;

    constructor (marca, cor, gastoMedioGasKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioGasKm = gastoMedioGasKm;
    }

    calcularGasto(distanciaKm,precoCombustivel){
        return distanciaKm * this.gastoMedioGasKm * precoCombustivel;
    }
}

const HondaCivic = new Carro('Honda Civic', 'Dourado', 1/15);
const strada = new Carro('Strada', 'Vermelho', 1/18);
const monza = new Carro('Monza', 'Vinho', 1/8);
const fiatUno = new Carro('Fiat Uno', 'Verde', 1/12);
const astra = new Carro('Astra', 'Cinza', 1/12);


console.log(HondaCivic.calcularGasto(2010,6.19), HondaCivic);