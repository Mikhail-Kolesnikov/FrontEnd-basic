//Операции

// + - / *
const resA = 25 / 5;
console.log(resA);
const resB = 25 / "5";
console.log(resB);
const resC = 25 * "5";
console.log(resC);
const resD = 25 / "a";
console.log(resD);
const resF = 25 - "15";
console.log(resF);
const resG = 25 - 0;
console.log(resG);
// **
console.log(2**4);
 

//пведение с +

const resE = 25 + "5";
console.log(resE);

const resK = 25 + 25 + "5";
console.log(resK);
const resT = null + "5";
console.log(resT);
//унарный

const resР = 25 + 25 + +"5";
console.log(resР);

//< > <= >= !=
const varA = 25;
const varB = "25";
console.log(varA == varB);
console.log(varA === varB);

const varC = true;
const varD = "25";
console.log(varC == varD);

const varE = false;
const varF = "0";
console.log(varC == varD);

//undefind & null

const varG = undefined;
const varH = null;
console.log(varG == varH);

//сравнение строк

const varK = "a";
const varL = "b";
console.log(varK > varL);

const varM = "a";
const varN = "b";
console.log(varM > varN);

const varO = "a";
const varP = "A";
console.log(varO > varP);

//&& ||

console.log("John" && null && 145);
console.log("John" || 145 || null);