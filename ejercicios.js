//Ejercicio 1
//Filtrar Números Pares
//Crear una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares

const obtainEvenNumbers = (numbers = []) => {
  const evenNumbers = numbers.filter((el) => el % 2 === 0);
  return evenNumbers;
};

console.log(obtainEvenNumbers([1, 3, 7, 8, 12]));

//Ejercicio 2
//Calcular Promedio
//Escribir una función que tome un array de números y calcule el promedio.

const getAverage = (numbers = []) => {
  const sumNumbers = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumNumbers / numbers.length;
};

console.log(getAverage([2, 4, 10, 4]));

//Ejercicio 3
//Imprimir con Retraso Usar una función flecha y setTimeout para imprimir cada elemento de un array con un retraso de 1 segundo por elemento.
const printElements = (elements = []) => {
  for (let i = 0; i < elements.length; i++) {
    setTimeout(() => {
      console.log(elements[i]);
    }, (i + 1) * 1000);
  }
};

printElements(["hola", "chau", "front"]);

//Ejercicio 4
//Operación con Callback
//Crear una función que reciba un callback y dos números, aplique el callback y devuelva el resultado. Implementar al menos dos callbacks diferentes.

const result = (callback, numberOne, numberTwo) => {
  return callback(numberOne, numberTwo);
}

const sum = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
}

const subtract = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
}

console.log("ejercicio 4: " + result(sum, 2, 2));

console.log("ejercicio 4: " + result(subtract, 5, 2));
