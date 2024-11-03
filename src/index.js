// //variáveis gobais
// const restaurante = {
//   mesa : {
//     numeroMesa : "2",
//     quantMaxPessoas : 8,
//     pedido : ""
//   },
//   pedidos : {
//     pedido1 :{
//       idPedido : "000001",
//       itens : {
//         item1 : {
//           numero : "54",
//           produto : "Pizza G de calabresa ",
//           descricao : "Pizza de calabresa tamanho Grande de 8 pedaços ",
//           bordasRecheadas : "sim",
//           valor : 55,
//           quantidade : 1
//         },
//         item2 : {
//           numero : "34",
//           produto : "Pizza G de Frango com requeijão ",
//           descricao : "Pizza de requeijão tamanho Grande de 8 pedaços ",
//           bordasRecheadas : "não",
//           valor : 60,
//           quantidade : 1
//         },
//         item3 : {
//           numero : "108",
//           produto : "coca cola 2lts",
//           descricao : "Refrigerante coca cola de 2 Litros",
//           valor : 11,
//           quantidade : 2
//         }
//       }, 
//     },
//     pedido2 : {
//       idPedido : "000002",
//       itens : {
//         item1 : {
//           numero : "65",
//           produto : "Esfiha de carne ",
//           descricao : "Esfiha  de carne assada ",
//           bordasRecheadas : "não",
//           valor : 50,
//           quantidade : 2
//         }
//       }  
//     }
//   },
//   usuario : {
//     matricula : "001",
//     tipoDeUsuário : "Garçon"
//   };


function abrirModal(event) {
  // Não deixa recarregar a página ao abrir o modal
  event.preventDefault();
  
  // Pega o valor total da conta
  const totalConta = document.getElementById('total').value;

  // Tratamento de erro: Verifica se o valor total está vazio ou é inválido
  if (!totalConta) {
      alert("Por favor, insira um valor para o total da conta.");
      return;
  }

  const totalValor = parseFloat(totalConta);
  
  // Verifica se o valor é maior que zero
  if (isNaN(totalValor) || totalValor <= 0) {
      alert("Por favor, insira um valor válido maior que zero.");
      return;
  }

  document.getElementById('modal').showModal();
}

function calcularConta(comDesconto) {
  const totalConta = parseFloat(document.getElementById('total').value);
  const incluirServico = document.getElementById('servico').value === "sim";
  const numPagantes = parseInt(document.getElementById('quantidade').value);

  const taxaServico = incluirServico ? 0.05 : 0;
  let valorFinal = totalConta + (totalConta * taxaServico);
  
  if (comDesconto) {
      valorFinal *= 0.9;
  }

  const valorPorPessoa = valorFinal / numPagantes;

  document.getElementById('resultado').textContent = `Valor total: R$ ${valorFinal.toFixed(2)}`;
  document.getElementById('taxaServico').textContent = taxaServico > 0 ? 'Com taxa de serviço (5%)' : 'Sem taxa de serviço';
  document.getElementById('totalPessoa').textContent = `Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`;

  document.getElementById('modal').close();
  document.getElementById('modalResultado').showModal();
}
