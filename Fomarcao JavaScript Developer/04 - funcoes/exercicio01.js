function escrevaNome(nome){
    return 'Meu nome é', nome;
};

// ------------------

const escrevaMeuNome = escrevaNome('Luiz Marcelo')

function verificarIdade(idade){
    if (idade <= 18){
        console.log('Meu nome é', escrevaMeuNome, 'e sou menor de idade.')
    } else{
        console.log('Meu nome é', escrevaMeuNome, 'e sou maior de idade.')
    } 
}

verificarIdade(10);

// --------------------

