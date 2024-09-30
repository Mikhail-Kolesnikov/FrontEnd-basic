//Объвить массив из 10 любых элементов, заполнить. 
//Вырезать первый элемент и добавить его в конец массива.

let arrOfNumber = [23, 5, 98, 3, 67, 74, 38, 2, 6];

const resOfShift = arrOfNumber.shift();
arrOfNumber.push(resOfShift);
console.log(arrOfNumber);