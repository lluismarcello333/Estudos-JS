// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [0,1,2,3,5,4,8,6,8,4,9,5,1,9,7,468]

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if(element % 2 === 0){
        console.log(element)
    };
};
