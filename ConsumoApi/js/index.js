// Consumo dos dados utilizando Fetch

/* fetch('https://viacep.com.br/ws/01001000/json/')
    .then((resposta) => {
        resposta.json()
            .then((dados) => {
                console.log(dados)
            })
    }).catch((erro) => {
        console.log(erro)
    }) */

    // Consumo dos dados da API utilizando Async/Await

    async function obterDadosCep(){
        try {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
        const dados = await resposta.json()

        console.log(dados);
        } catch(erro) {
            console.log('Deu errado!', erro)
        } finally {
            console.log('Terminou a requisição')
        }
    }

    obterDadosCep();