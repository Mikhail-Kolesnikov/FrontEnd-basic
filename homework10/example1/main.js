//Задание 1. Even/Odd
//Создайте ф-цию, которая определяет парность числа
//Функция должна принимать целое число
//Если число не целое - скруглить его в меньшую сторону
//Функция должна вернуть строку 'even' если число четное
//Функция должна вернуть строку 'odd' если число не четное


const evenOrEddNumber =  (number) => {
    number = Math.floor(number)
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Edd";
    }

}
console.log(evenOrEddNumber(9.7));
console.log(evenOrEddNumber(8));