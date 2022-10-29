function calcularValorTotalDeLivrosDisponiveis(livros){
                //      acumulador e o livro            Meu primeiro indice
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}