// Importando a biblioteca readline-sync
const readline = require('./calculo.test');

//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

//Defini uma função para calcular a conta
function calcularConta(numeroPessoas, valorTotal, metodoPagamento) {
    // Verifica se o pagamento é por PIX ou dinheiro para aplicar o desconto
    let desconto = 0;
    const cartão = desconto
    if (metodoPagamento === 'PIX' || metodoPagamento === 'dinheiro' ) {
      desconto = valorTotal * 0.1; // Calcula 10% de desconto
    }
    // Calcula o valor total com o desconto
    const valorComDesconto = valorTotal - desconto;
  
    // Calcula o valor por pessoa
    const valorPorPessoa = valorComDesconto / numeroPessoas;
  
    // Exibe o resultado
    console.log(`Cada pessoa deve pagar R$ ${valorPorPessoa.toFixed(2)}`);
  }
  
  // Exemplo de uso:
  calcularConta(4, 100, 'cartão');

  module.exports = {
    calcularConta
  };