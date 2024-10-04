//const randN = Math.random();

function doubleNumber(n) {
    const res = n ** 2;
    return res;
};
//const resDouble = doubleNumber(10);
console.log(doubleNumber(3));

const doubleNumberExpression = function (n) {
    return n * 2;
}
console.log(doubleNumberExpression(75));

const doubleNumberArrow = (n) => {
    return n * 2;
}
console.log(doubleNumberExpression(275));

//====================================

function stringName(n) {
    //return "Привет, " + n;
    if (typeof n === "string") {
        return `Hello ${n}`;


    } else {
        return `no name`;
    }
}
console.log(stringName("Mikhail"));

const greetingArrow = (name) => {
    if (typeof name === "string") {
        return `Hello ${name}`
    } else {
        return `Введите корректное значение`
    }
}
const greetingVoid = (name) => {
    if (typeof name === "string") {
        console.log(`Hello ${name}`)
    } else {
        console.log(`Введите корректное значение`);
    }
}
console.log(greetingVoid("Johny Depp"));

const countOfSymbol = (word) => {
    const res = (typeof word === "string") ? word.length : "Not sentence";
    //const numberOfSymbols = word.length;
    return res;

}
console.log(countOfSymbol("Hello, world!"));

const countOfSymbol2 = (word) => (typeof word === "string") ? word.length : "Not sentence";
    //const numberOfSymbols = word.length;

console.log(countOfSymbol("Hello, world!"))

const countOfSymbol3 = (word) => {(typeof word === "string") ? word.length : "Not sentence";
    //const numberOfSymbols = word.length;
}
console.log(countOfSymbol("Hello, world!"))













