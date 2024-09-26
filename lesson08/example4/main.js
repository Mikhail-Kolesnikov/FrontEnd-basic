//условный оператор

if (5 < 10) {
    console.log("5 меньше 10");

} else {
    console.log("5 не меньше 10");
}
const age = 25;

if (age < 10) {
    console.log("kind");

} else if (age < 18 && age >= 12) {
    console.log("Teeneger")
} else {
    console.log("Adult")
}
// switch
const nameH = "Monday"
switch (nameH) {
    case "Monday": console.log("первый день недели");
        break;
    case "tuesday": console.log("второй день недели");
        break;
    default: console.log("3 и дальше")

}
//тернарный оперетор
const result = (age < 18) ? "not adult" : "already adult";
console.log(result);

//  спомощью if:
let resultWithIf;
if (age < 18) {
    resultWithIf = "not adult";

} else {
    resultWithIf = "already adult";
}