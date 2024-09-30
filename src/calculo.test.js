// Importando a função
const {
    calcularConta
    } = require("./index");

test('Deve calcular o valor por pessoa com desconto', () => {
  let resultado = calcularConta(4, 100, 'PIX');
  expect(resultado).toBe(22.5);
});

test("deve calcularo o valor por pessoa sem desconto", () => {
  let resultado = calcularConta(4, 100, "cartão");
  expect(resultado).toBe(25);
});



test("deve calcularo o valor por pessoa sem desconto", () => {
  let resultado = calcularConta(4, 100, "banana");
  expect(resultado).toBe(25);
});