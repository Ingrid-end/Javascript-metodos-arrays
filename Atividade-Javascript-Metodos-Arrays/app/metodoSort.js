let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
 btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

 function ordernarLivrosPorPreco(){
                            // Metodo de order, faz comparação entre a e b
    livrosOrdenadosPorPreco = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenadosPorPreco);
 }