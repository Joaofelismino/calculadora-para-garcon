// Importando a função
const {
    calcularConta
    } = require("./index");

    it('deve calcular o valor por pessoa corretamente para pagamento com PIX', () => {
      // Arrange: Prepara os dados de entrada
      const numeroPessoas = 3;
      const valorTotal = 100;
      const metodoPagamento = 'pix';
    
      // Act: Executa a função
      const resultado = calcularConta(numeroPessoas, valorTotal, metodoPagamento);
    
      // Assert: Verifica o resultado esperado
      expect(resultado).toBeCloseTo(30);
    });

    it('deve calcular o valor por pessoa corretamente para pagamento com dinheiro', () => {
      const numeroPessoas = 2;
      const valorTotal = 80;
      const metodoPagamento = 'dinheiro';
  
      const resultado = calcularConta(numeroPessoas, valorTotal, metodoPagamento);
  
      expect(resultado).toBeCloseTo(36);
    });

    it('deve calcular o valor por pessoa corretamente para pagamento com cartão', () => {
      const numeroPessoas = 4;
      const valorTotal = 120;
      const metodoPagamento = 'cartao';
  
      const resultado = calcularConta(numeroPessoas, valorTotal, metodoPagamento);
  
      expect(resultado).toBeCloseTo(30);
    });