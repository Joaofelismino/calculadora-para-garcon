//Façã sua lógica para aplicar o desconto apenas para PIX, DINHEIRO ou cartao

const readline = require('readline-sync'); //Importa a biblioteca readline-sync que permite a interação com o usuário através do terminal, permitindo a leitura de entradas.

//Defini uma função para calcular a conta
function calcularConta() {
  // 
  let numeroPessoas;
    while (true) {
        numeroPessoas = parseInt(readline.question("Digite o número de pessoas:"));
        if (numeroPessoas > 0) {
            break;
        } else {
            console.log("O número de pessoas deve ser maior que zero.")};
    }

  let valorTotal;
  while (true) {
      valorTotal = parseFloat(readline.question("Digite o valor total da conta:"));
      if (valorTotal > 0) {
          break;
      } else {
          console.log("O valor total deve ser maior que zero.")};
  }

 // Validação do método de pagamento em um loop
 let metodoPagamento;
 while (true) {
   metodoPagamento = readline.question("Digite o método de pagamento (PIX, dinheiro ou cartao):").toLowerCase();
   if (/^(pix|dinheiro|cartao)$/.test(metodoPagamento)) {
     break; // Sai do loop se o método de pagamento for válido
   } else {
     console.log("Método de pagamento inválido. Por favor, digite PIX, dinheiro ou cartao.")};
 }

 // Calcula o desconto
 let desconto = 0;
 if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
   desconto = valorTotal * 0.1;
 }
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