//Strig[] arr= [5];
const arrA = [1, 3, 5, "abcd", null, undefined, [10, 100], { a: 67 }];

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstElemOfB = b[0];
console.log(firstElemOfB)

console.log(b.length);

const resultOfPush = b.push("new last element"); //добавляет элемент в конец
console.log(b)
console.log(resultOfPush)
const resultOfPop = b.pop(); //удаляет последний элемент из массива
console.log(b);
console.log(resultOfPop);
b.unshift("new FIRST ELEMENT");
console.log(b);
b.shift();
console.log(b);

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resOfFirst = c.shift();
const resOfLast = c.push(resOfFirst);
console.log(c);
