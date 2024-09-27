//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO

//Defini uma função para calcular a conta
function calcularConta(numeroPessoas, valorTotal, metodoPagamento) {
    // Verifica se o pagamento é por PIX ou dinheiro para aplicar o desconto
    let desconto = 0;
    const cartão = desconto //
    if (metodoPagamento === 'PIX' || metodoPagamento === 'dinheiro' ) {
      desconto = valorTotal * 0.1; // Calcula 10% de desconto
    }
    // Calcula o valor total com o desconto
    const valorComDesconto = valorTotal - desconto;
  
    // Calcula o valor por pessoa
    const valorPorPessoa = valorComDesconto / numeroPessoas;
  
    // Exibe o resultado
    const valorPessoaInt = parseFloat(valorPorPessoa.toFixed(2))
    console.log(`Cada pessoa deve pagar R$ ${valorPessoaInt}`);
    console.log(typeof valorPessoaInt)
    return valorPessoaInt
  }
  
  // Exemplo de uso:
  calcularConta(4, 100, 'PIX');

  module.exports = {
    calcularConta
  };