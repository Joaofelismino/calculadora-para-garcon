//Façã sua lógica para aplicar o desconto apenas para PIX, DINHEIRO ou cartao

const readline = require('readline-sync'); //Importa a biblioteca readline-sync que permite a interação com o usuário através do terminal, permitindo a leitura de entradas.

//Defini uma função para calcular a conta
function calcularConta() {

  // Utiliza a função readline.question() para apresentar uma pergunta ao usuário e armazenar a resposta nas variáveis numeroPessoas, valorTotal e metodoPagamento.
  const numeroPessoas = parseInt(readline.question("Digite o numero de pessoas:")); //parseInt converte valores para numeros inteiros.
  const valorTotal = parseFloat(readline.question("Digite o valor total da conta:")); //parseFloat converte valores para ponto flutuante(números com casa decimal).
  const metodoPagamento = readline.question("Digite o metodo de pagamento (PIX, dinheiro ou cartao):").toLowerCase(); //toLowerCase converte para letras minusculas.

  // Verifica se o pagamento é por PIX ou dinheiro para aplicar o desconto
    let desconto = 0;
    
    if (metodoPagamento === "cartão") {desconto = 0;
    } else if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro' ) {
      desconto = valorTotal * 0.1; // Calcula 10% de desconto
    } else{console.log("Método de pagamento inválido. Os métodos de pagamento válidos são dinheiro, pix ou cartão");
      return;
    };

    // Calcula o valor total com o desconto
    const valorComDesconto = valorTotal - desconto;
  
    // Calcula o valor por pessoa
    const valorPorPessoa = valorComDesconto / numeroPessoas;
  
    // Formatando o reultado para evitar erros.
    const valorPessoaFormatado = parseFloat(valorPorPessoa.toFixed(2)) //A função toFixed é usada para exibir até duas casas decimais.

    // Exibe o resultado
    console.log("Cada pessoa deve pagar R$", valorPessoaFormatado)
  }
  
  // Chamando a função:
  calcularConta()

  module.exports = {
    calcularConta
  };