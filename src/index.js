function teste(event){
  event.preventDefault();
  console.log("entrou aqui")
}

document.getElementById("formMesa").addEventListener("submit", teste);