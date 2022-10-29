
let livros = [];
        // Onde esta as informações dos livros
const endPontDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

//  requisição e buscar os livros da API.
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
                    // manipular as funções e essas requisições com HTTP esses APIs 
    const res = await fetch(endPontDaApi)
    //  Resposta da requisição 
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela (livrosComDesconto);
}



