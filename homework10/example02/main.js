//Создайте ф-цию, которая возвращает квадрат числа
//Функция должна принимать целое число
//Если число не целое - скруглить его в меньшую сторону
//Функция должна вернуть квадрат этого числа

const squqreOfANumber = (number) => {
    number = Math.floor(number);
    return number **= 2;

}
console.log(squqreOfANumber(3.9));