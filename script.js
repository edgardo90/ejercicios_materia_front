//Ejercicio 5
//Contador con Botones
//Crear un botón para incrementar y otro para decrementar un contador mostrado en un elemento div. Actualizar el texto del div al hacer clic
const buttonDecrease = document.getElementById("buttonDecrease");
const buttonIncrease = document.getElementById("buttonIncrease");
const outputNumber = document.getElementById("outputNumber");

buttonDecrease.addEventListener("click", () => {
  outputNumber.textContent = Number(outputNumber.textContent) - 1;
});

buttonIncrease.addEventListener("click", () => {
  outputNumber.textContent = Number(outputNumber.textContent) + 1;
});

//Ejercicio 6
//Cambiar Texto de Párrafos
//Seleccionar todos los elementos p de la página y cambiar su texto al hacer clic en un botón

const handleTextChange = () => {
  const original = document.getElementById("textChange");
  original.innerText = "hola se cambio el texto";
};

//Ejercicio 7
//Agregar Elementos a una Lista
//Crear una lista desordenada vacía y un botón. Al hacer clic en el botón,
//agregar un nuevo elemento a la lista con un número que se incremente automáticamente
let count = 1; // Comienza desde 1

const addListItem = () => {
  const ul = document.getElementById("numberList");
  const li = document.createElement("li");
  li.textContent = `Elemento ${count}`;
  //ejercicio 8
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.borderRadius = "50%";
  deleteButton.style.border = "none";
  deleteButton.addEventListener("click", () => {
    ul.removeChild(li); // Elimina solo este elemento
  });
  li.appendChild(deleteButton);
  //
  ul.appendChild(li);
  count++; // Incrementa el número para el próximo elemento
};
