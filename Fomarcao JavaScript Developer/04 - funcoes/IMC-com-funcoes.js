function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);

};

function classificarImc(IMC) {
    if (IMC < 18.5) {
        return 'Está abaixo do peso!';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Peso normal! Continue assim.';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Está acima do peso!';
    } else if (IMC >= 30 && IMC < 40) {
        return 'Está Obeso! Procure um nutricionista';
    } else {
        return 'Obesidade Grave! Procure um nutricionista';
    }
};

function main() {

    const peso = 75;
    const altura = 1.75;

    const IMC = calcularImc(peso, altura);
    console.log(classificarImc(IMC));
}

main();