const listaUl = document.getElementById("list");
const form = document.getElementById("form");
const input = document.getElementById("input");

const criarItem = (value) => {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const button = document.createElement("button");
  li.appendChild(p);
  p.innerText = value;
  button.type = "button";
  button.innerText = "Deletar item";
  button.classList.add("delete-button");
  button.onclick = () => {
    listaUl.removeChild(li);
    salvarLista();
  };
  li.appendChild(button);
  listaUl.appendChild(li);
};

const gerarItem = (campo) => {
  if (campo !== "") {
    criarItem(campo);
  } else {
    alert("Adicione um valor ao campo.");
  }
};

function AddItem() {
  gerarItem(input.value);
  salvarLista();
  limparForm(input);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const limparForm = (campo) => {
  campo.value = "";
};

function salvarLista() {
  const items = [];
  let ps = listaUl.querySelectorAll("p");

  for (let p of ps) {
    let textoItem = p.innerText;
    items.push(textoItem);
  }

  const itemsJSON = JSON.stringify(items);
  localStorage.setItem("lista", itemsJSON);
}

function gerarListaLocalStorage() {
  const lista = localStorage.getItem("lista");
  const listaFormatada = JSON.parse(lista);
  for (let i of listaFormatada) {
    criarItem(i);
  }
}

gerarListaLocalStorage();
