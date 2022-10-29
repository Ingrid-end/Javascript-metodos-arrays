        // Se fosse fazer um botão de cada vez 
// Buscar no html o Id do botão
// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')

// Ouvir se teve click ou não para acionar a função
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)

            // teria q refazer esse filtrarLivors para cada categoria
// Função do filtro
//function filtrarLivros(){
    // retorna uma nova array so com os livros front 
                        //Esse livros vem do main.js, onde ele tras todos os livros 
   // let livrosFiltrados = livros.filter(livro => 
     //   livro.categoria == 'front-end')
    //console.table(livrosFiltrados);
//}

        // Jeito mais elegante e mais compacto
    
// Buscar no html todos os elementos q tiverem a classe .btn
const botoes = document.querySelectorAll('.btn')
// Para separar os botões/ para cada botão ter seu "click"
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    // Para saber qual botão q esta sendo clickado pelo id
    const elementoById = document.getElementById(this.id)
    console.log(elementoById);
    // Para saber a categria desse botão (cada elemento tem esse valor)
    const categoria = elementoById.value
    // O filtro - Livros disponivel = se a categoria for (value)disponiveis faz um filtro = livros q tenham a quantidade maior q zero
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    // Essa função esta no metodoForEach.js/ apenas reutilizando
    exibirOsLivrosNaTela(livrosFiltrados);

    // Para mostrar o valor total de livros disponiveis so na area certa
    if( categoria == 'disponiveis'){
        // Calcular o preço dos livros disponiveis antes de carregar os livros na tela
                            // Essa função esta no metodoReduce.js
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

 function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    elementoComOValorTotalDisponivelDeLivros.innerHTML =`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
 }

    // let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    // exibirOsLivrosNaTela(livrosFiltrados)