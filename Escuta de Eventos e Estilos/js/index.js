const buttonAumentar = document.querySelector("#aumentar-botao");
const buttonDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

buttonDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;

  buttonDiminuir.classList.add("btn");
  buttonAumentar.classList.remove("btn");
});

buttonAumentar.addEventListener("click", (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;
  buttonAumentar.classList.add("btn");
  buttonDiminuir.classList.remove("btn");
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// Adicionando Estilos iline no elemento Contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "1px solid #aaa";
contadorElemento.style.width = "150px";

// Manipular classes

console.log(buttonDiminuir.classList);

//buttonAumentar.classList.add("btn");
//buttonDiminuir.classList.remove("btn");

const themeButton = document.querySelector("#theme");

let darktTheme;

// Definindo uma função que será executada ao carregar o conteúdo da página/janela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");

  darktTheme = isDarkThemeStorage === 'true';

  const body = document.querySelector("body");

  if (darktTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "#fff";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "black";
  }
};

themeButton.addEventListener("click", () => {
  darktTheme = !darktTheme;

  localStorage.setItem("isDarkTheme", darktTheme);

  const body = document.querySelector("body");

  if (darktTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "#fff";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "black";
  }
});
