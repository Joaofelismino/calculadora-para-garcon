//variáveis gobais
const restaurante = {
  mesa : {
    numeroMesa : "2",
    quantMaxPessoas : 8,
    pedido : ""
  },
  pedidos : {
    pedido1 :{
      idPedido : "000001",
      itens : {
        item1 : {
          numero : "54",
          produto : "Pizza G de calabresa ",
          descricao : "Pizza de calabresa tamanho Grande de 8 pedaços ",
          bordasRecheadas : "sim",
          valor : 55,
          quantidade : 1
        },
        item2 : {
          numero : "34",
          produto : "Pizza G de Frango com requeijão ",
          descricao : "Pizza de requeijão tamanho Grande de 8 pedaços ",
          bordasRecheadas : "não",
          valor : 60,
          quantidade : 1
        },
        item3 : {
          numero : "108",
          produto : "coca cola 2lts",
          descricao : "Refrigerante coca cola de 2 Litros",
          valor : 11,
          quantidade : 2
        }
      }, 
    },
    pedido2 : {
      idPedido : "000002",
      itens : {
        item1 : {
          numero : "65",
          produto : "Esfiha de carne ",
          descricao : "Esfiha  de carne assada ",
          bordasRecheadas : "não",
          valor : 50,
          quantidade : 2
        }
      }  
    }
  },
  usuario : {
    matricula : "001",
    tipoDeUsuário : "Garçon"
  }

};

//calcular soma do pedido
function calcularPedido(event){
  event.preventDefault();

  // capiturar os valores dos inputs
  let valorConta = document.getElementById("total").value;
  let taxaServiço = document.getElementById("servico").value;
  let qtdePagantes = document.getElementById("quantidade").value;

  const obj = {
      valor : valorConta,
      qtdePagantes : qtdePagantes
  };


  restaurante.pedidos.pedido3 = obj; 

  console.log(restaurante.pedidos);

  let resultado = document.getElementById("resultado");
  let taxa= document.getElementById("taxaServico");
  let totalPessoa = document.getElementById("totalPessoa");

  
  
  //reduce uso para a soma dos itens uasndo a quantidade tbm.
  //aqui seria um subtotal pois ainda não está aplicado o desconto ou incremento dos 10%
  const total = Object.values(restaurante.pedidos.pedido2.itens).reduce((soma, item) => {
    return soma + (item.valor * item.quantidade);
  }, 0);
  
  //adiciono o valor calculado acima ao obj
  //restaurante.pedidos.pedido2.valorTotal = total*0.9;
  //desconto
  restaurante.pedidos.pedido2.valorTotal

  //taxa de serviço
  //restaurante.pedidos.pedido2.valorTotal = total*0.05;

  resultado.textContent = total*0.90;
  taxa.textContent = total*0.05;

  //calculo por pessoa
  const calculoPorPessoa = (total*0.90 + total*0.05)/qtdePagantes;
  totalPessoa.textContent = calculoPorPessoa;

  //console.log(`Valor total do pedido: R$ ${restaurante.pedidos.pedido1.valorTotal}`);
  //console.log(restaurante);
}


document.getElementById("formMesa").addEventListener("submit", calcularPedido);