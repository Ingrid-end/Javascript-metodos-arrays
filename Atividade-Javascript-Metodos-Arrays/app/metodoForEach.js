const elementoParaInserirLivros = document.getElementById('livros')
const elementoComOValorTotalDisponivelDeLivros = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros){
  // Para o metodoFilter.js quando aparecer os livros na tela retornar vazio/ vai ser limpo
  elementoParaInserirLivros.innerHTML = ''
  // Retorna vazio 
  elementoComOValorTotalDisponivelDeLivros.innerHTML = ''
    // Altera o Html com as informações que estavam no API com o ${}/ para cada livro ele faz um html novo
        listaDeLivros.forEach(livro => {
              // Forma mais longa para verificar a disponibilidade do livro
              // let disponibilidade = verificarDisponibilidadeDoLivro(livro) 

            // Função para saber se esta disponivel ou não o livro usando a classe
            let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
            elementoParaInserirLivros.innerHTML +=
             ` <div class="livro">
            //  A classe vai ser baseada na função
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
              <span class="tag">${livro.categoria}</span>
            </div>
          </div>`
            
        });
    }

    // Forma mais longa para verificar a disponibilidade do livro
  //  function verificarDisponibilidadeDoLivro(livro){
  //   if (livro.quantidade > 0)
  //     return 'livor__imagens'
  
  //   else
  //     return  'livor__imagens indisponivel'
  //   }

    // metodo toFixed = fixa apenas em duas casas decimais 