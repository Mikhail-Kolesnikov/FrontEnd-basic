//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50.
// Найти сумму всех элементов массива. Вывести в консоль.

let arrForNumber = [];

for (i = 0; i < 10; i++) {
    arrForNumber[i] = Math.round(Math.random() * 75)
}
console.log("Массив из 10 элементов: " + arrForNumber);

let sum = arrForNumber[0];

for (i = 0; i < arrForNumber.length; i++) {
    sum += arrForNumber[i];
}
console.log("Сумма из 10 элементов: " + sum);
