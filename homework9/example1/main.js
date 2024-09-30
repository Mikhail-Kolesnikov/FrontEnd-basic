//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. 
//(НЕ используем Math.min/max) Вывести в консоль.

const arrOfNumber = [];




for (i = 0; i <= 10; i++) {
    arrOfNumber.push(Math.round(Math.random() * 100));
}
console.log("Массив из чисел: " + arrOfNumber);

let min = arrOfNumber[0];
let max = arrOfNumber[0];

for (i = 0; i < arrOfNumber.length; i++){

    if (arrOfNumber[i] < min) {
        min = arrOfNumber[i];
    }

if (arrOfNumber[i] > max) {
    max = arrOfNumber[i];
}
}
console.log("Максимальное число: " + max);
console.log("Минимальное число: " + min);
