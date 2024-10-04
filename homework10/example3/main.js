//Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке
//Аргументы функции два - начало промежутка и конец промежутка
//Если число не целое - скруглить его в меньшую сторону
//На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму

const sumFromStartToEnd = (start, end) => {
    start = Math.floor(start);
    end = Math.floor(end);

    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumFromStartToEnd(2.4, 6.6));

