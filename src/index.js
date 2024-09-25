// Importando a biblioteca readline-sync
const readline = require('./calculo.test');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

//Defini uma função para calcular a conta
function calcularConta(numeroPessoas, valorTotal, metodoPagamento) {
    // Verifica se o pagamento é por PIX, dinheiro ou cartão para aplicar o desconto
    let desconto = 0;
    if (metodoPagamento === 'PIX' || metodoPagamento === 'dinheiro' || !cartão) {
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
  calcularConta(4, 100, 'PIX');