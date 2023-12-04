const entradas = [5,50,10,98,23,57,26,15,87,32,8,15,63,74]
let i = 0;


function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
};

module.exports = {gets, print};

// Poderíamos também realizar a exportação do arquivo da seguinte forma
// module.exports.gets = gets;