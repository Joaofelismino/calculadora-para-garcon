//Importa o módulo readline-sync que permite a interação com o usuário através do terminal, como a leitura de entradas.
const readline = require('readline-sync');

//Define uma função chamada calcularConta que encapsula toda a lógica para calcular o valor a ser pago por pessoa.
function calcularConta() {
  // Solicita ao usuário o número de pessoas e valida a entrada
  let numeroPessoas;
  do {
    numeroPessoas = parseInt(readline.question("Digite o número de pessoas: "));
    if (isNaN(numeroPessoas) || numeroPessoas <= 0) {
      console.log("Por favor, digite um número válido de pessoas (maior que zero).");
    }
  } while (isNaN(numeroPessoas) || numeroPessoas <= 0);
  
  // Solicita ao usuário o valor total da conta e valida a entrada
  let valorTotal;
  do {
    valorTotal = parseFloat(readline.question("Digite o valor total da conta: "));
    if (isNaN(valorTotal) || valorTotal <= 0) {
      console.log("Por favor, digite um valor total válido (maior que zero).");
    }
  } while (isNaN(valorTotal) || valorTotal <= 0);

  // Solicita ao usuário o método de pagamento e valida a entrada
  let metodoPagamento;
  do {
    metodoPagamento = readline.question("Digite o método de pagamento (PIX, dinheiro ou cartão): ").toLowerCase();
    if (!/^(pix|dinheiro|cartao)$/.test(metodoPagamento)) {
      console.log("Método de pagamento inválido. Por favor, digite PIX, dinheiro ou cartão.");
    }
  } while (!/^(pix|dinheiro|cartao)$/.test(metodoPagamento));
  
  // Calcula o desconto (10%) para pagamentos com PIX ou dinheiro
  let desconto = 0;
  if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
    desconto = valorTotal * 0.1;
  }

  // Calcula o valor total com o desconto
  const valorComDesconto = valorTotal - desconto;

  // Calcula o valor por pessoa
  const valorPorPessoa = valorComDesconto / numeroPessoas;

  // Formata o resultado para duas casas decimais
  const valorPessoaFormatado = parseFloat(valorPorPessoa.toFixed(2));

  // Exibe o resultado formatado
  console.log("Cada pessoa deve pagar R$", valorPessoaFormatado);

  // Retorna o valor por pessoa formatado (para possível uso em outros módulos)
  return valorPessoaFormatado;
}

// Chama a função para calcular a conta
calcularConta();

// Exporta a função para ser utilizada em outros módulos
module.exports = {
  calcularConta
};