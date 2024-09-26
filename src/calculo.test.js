// Importando a função
const {
    calcularConta
    } = require("..src/calculo");

test('Deve calcular o valor por pessoa com desconto', () => {
  let resultado = calcularConta(4, 100, 'PIX');
  expect(resultado).toBe(22.5);
});