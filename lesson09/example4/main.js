//Math

const randNumber = Math.random();//возвращает случайное число

console.log(randNumber);

const roundedNumber = Math.round(4.67);
console.log(roundedNumber);

const roundedNumberFloor = Math.floor(4.99);// округляет до нижнего значения
console.log(roundedNumberFloor)

const roundedNumberCeil = Math.ceil(4.99);//округляет до высшего  значения
console.log(roundedNumberCeil)



//const number = Math.random(1, 10);
console.log(Math.round(Math.random() * 10));

//возведение в степень

const pow = Math.pow(2, 3);// возведение в степень
console.log(pow);

//min & vax

const maxNumber = Math.max(1256, 456, 19999, -5, 887654);
console.log(maxNumber);


const arrD = [];
for (i = 0; i < 15; i++) {
    arrD.push(Math.round(Math.random() * 10));

}
console.log(arrD);