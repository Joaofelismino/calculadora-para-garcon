//variáveis gobais
const restaurante = {
  mesa : {
    numeroMesa : "2",
    quantMaxPessoas : 8,

  },
  pedido : {
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

  //reduce uso para a soma dos itens uasndo a quantidade tbm.
  const total = Object.values(restaurante.pedido.itens).reduce((soma, item) => {
    return soma + (item.valor * item.quantidade);
  }, 0);
  
  console.log(`Valor total do pedido: R$ ${total}`);
  console.log(auxiliarSoma);
  
}

document.getElementById("formMesa").addEventListener("submit", calcularPedido);