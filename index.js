const encriptVocals = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const inputText = document.querySelector(".input__text");

const btnEncript = document.querySelector(".btn__cript");

const btnUncript = document.querySelector(".btn__uncript");

const containerEncript = document.querySelector(".showText");

const showTextEncript = document.querySelector(".showText__encript");

// función encriptado
function encripter(text) {
  let textValue = text.value.toLowerCase();

  for (let letter in encriptVocals) {
    textValue = textValue.replaceAll(letter, encriptVocals[letter]);
  }
  return textValue;
}

// función desencriptado
function uncripter(text) {
  let textValue = text.value.toLowerCase();

  for (let letter in encriptVocals) {
    textValue = textValue.replaceAll(encriptVocals[letter], letter);
  }
  return textValue;
}

// función para crear boton de copiado de texto
function createBtnCopy() {
  const btnCopy = document.createElement("button");
  btnCopy.setAttribute("class", "btn__copy");
  btnCopy.textContent = "Copiar";

  showTextEncript.append(btnCopy);
}

// funcion para copiar texto
function copyText(selectorEncript) {
  const btnCopy = document.querySelector(".btn__copy");

  btnCopy.addEventListener("click", async () => {
    // console.log(selectorEncript(inputText));
    await navigator.clipboard.writeText(selectorEncript(inputText));
    alert("Texto Copiado!");
  });
}

//encripta cuando se cliquea el botón encriptar
btnEncript.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("No ha ingresado ningún texto");
  } else {
    showTextEncript.innerHTML = encripter(inputText);
    showTextEncript.classList.add("active");
    containerEncript.setAttribute("style", "background-image: none");

    createBtnCopy();
    copyText(encripter);
  }
});

//desencripta cuando se clica el botón desencriptar
btnUncript.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("No ha ingresado ningún texto");
  } else {
    showTextEncript.innerHTML = uncripter(inputText);
    showTextEncript.classList.add("active");
    containerEncript.setAttribute("style", "background-image: none");

    createBtnCopy();
    copyText(uncripter);
  }
});
