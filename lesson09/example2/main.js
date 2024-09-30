//циклы

const c = ["a", 2, 3, 4, 5, 6, 7, 8, 9, "end"];
let allElementsOfArray = '';

for (let i = 0; i <= c.length; i++) {
    //console.log(c[i]);
    // c[0]=i;
    // console.log("Это проход цикла номер " + i);
    allElementsOfArray = allElementsOfArray + " " + c[i];
}
console.log(allElementsOfArray);

//Цикл while
let j = 0;

while (j < c.length) {
    allElementsOfArray = allElementsOfArray + " " + c[j];
    j++;
}
const arrC = [];
for (let i = 5; i <= 9; i++) {
    arrC.push(i);

    //resPush = arrC.push;

}
console.log(arrC);


// const resultOfPush = b.push("new last element"); //добавляет элемент в конец
// console.log(b)
// console.log(resultOfPush)
