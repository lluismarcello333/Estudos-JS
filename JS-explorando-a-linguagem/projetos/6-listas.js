console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPAulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Acre`) //Adicionando um item na lista
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //Deletando um item na lista
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);
