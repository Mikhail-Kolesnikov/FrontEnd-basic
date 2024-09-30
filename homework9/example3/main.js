//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. 
//Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

let arrOfNumber = [];
for (i = 0; i < 10; i++) {
    arrOfNumber[i] = Math.round(Math.random() * 75);
}
console.log("Массив из чисел: " + arrOfNumber);

let min = arrOfNumber[0];
let max = arrOfNumber[0];

for (i = 0; i < arrOfNumber.length; i++) {
    if (arrOfNumber[i] < min) {
        min = arrOfNumber[i];
    }

    if (arrOfNumber[i] > max) {
        max = arrOfNumber[i];
    }

}

const resOfsum = max + min;

console.log("Минимальное число: " + min);
console.log("Максимальное число: " + max);
console.log("Сумма максимального и минимального значения: " + resOfsum);

