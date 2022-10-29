// Esse metodo é bem parecido com o forEach 
// Mas Diferentemente do forEach o Map retornar um valor e faz outra lista com esses novos valores 

function aplicarDesconto(livros){
    const Desconto = 0.5;

    livrosComDesconto = livros.map(livro => {
            // ... =  vai fazer uma cópia de todo o array, ou do objeto existente, para outro objeto.
                    // Alterando o preço
     return {...livro, preco: livro.preco - (livro.preco * Desconto)}

    })
    return livrosComDesconto
}