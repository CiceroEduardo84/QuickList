const main = document.querySelector("main");
const form = document.querySelector("form");
const inputItem = document.getElementById("item");
const listItems = document.querySelector("ul");

// Captura o evento de submit
form.onsubmit = (event) => {
  // Previne o comportamento padrão de carregamento da página.
  event.preventDefault();

  // Formata o testo da string
  const item = formatStringItem(inputItem.value);

  // Adiciona um novo item
  addItem(item);
};

// Formatando uma string
function formatStringItem(item) {
  //Converte o valor vindo de item para garantir que seja uma string
  item = String(item);

  // Pega o resto do nome do item com exceção dá primeira letra
  const restName = item.slice(1);

  //Pega a primeira letra e a torna maiúscula
  const firstLetter = item.charAt(0).toUpperCase();

  //Concatena a primeira letra ao resto da frase
  const nameFormat = firstLetter.concat(restName);

  return nameFormat;
}

// Adicionar item a lista
function addItem(item) {
  try {
    const list = document.createElement("li");
    const checkbox = document.createElement("input");
    const description = document.createElement("p");
    const img = document.createElement("img");

    // Adicionando classe ao li
    list.classList.add("itemList");

    // Adicionando atributos ao input.
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "item");
    checkbox.setAttribute("value", item);

    // Adicionando a descrição do item.
    description.textContent = item;

    // Adicionando os atributos do icone de apagar.
    img.setAttribute("src", "assets/icons/delete.svg");
    img.setAttribute("alt", "lixeira");
    img.setAttribute("class", "Drop");

    // Adiconar o conteúdo da li
    list.append(checkbox, description, img);

    // Adicionando li a lista
    listItems.append(list);

    //Limpa o input do form
    clearInputs();
  } catch (error) {
    alert("Não foi possivel adicionar o item!");
    console.error(error);
  }
}

// Evento que captura os clicks na lista
listItems.addEventListener("click", (event) => {
  // Verifica se o elemento clicado e o de deletar
  if (event.target.classList.contains("Drop")) {
    // Captura o elemento pai
    const item = event.target.closest(".itemList");

    // Exibe a mensagem de item deletado
    alertInfo();

    // Deleta o elemento pai da lista
    item.remove();
  }
});

// limpa o formulário
function clearInputs() {
  inputItem.value = "";
  inputItem.focus();
}

// Cria um alerta personalizado na tela
function alertInfo() {
  const boxInfo = document.createElement("div");
  const icon = document.createElement("img");
  const message = document.createElement("p");
  const iconClose = document.createElement("img");

  // Add classe a box info
  boxInfo.classList.add("boxInfo");

  // Add atributos do icon de info
  icon.setAttribute("src", "assets/icons/info.svg");
  icon.setAttribute("alt", "Info icon");

  // Add messagem
  message.textContent = "O item foi removido da lista!";

  // Add atributos do icon de de fechar
  iconClose.setAttribute("src", "assets/icons/close.svg");

  // Add conteúdo da minha div
  boxInfo.append(icon, message, iconClose);

  // Add conteúdo á main
  main.append(boxInfo);
}
