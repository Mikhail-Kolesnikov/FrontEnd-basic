const resOfArrowFunctionDeclaration = countOfSymbol("Hello!!!!");
console.log(resOfArrowFunctionDeclaration)



const countOfSymbol = (word) => {
    const res = (typeof word === "string") ? word.length : "Not sentence";
    //const numberOfSymbols = word.length;
    return res;

}

const countOfSymbolFD = (word) => {
    const res = (typeof word === "string") ? word.length : "Not sentence";
    //const numberOfSymbols = word.length;
    return res;

}

const resOfArrowFunction = countOfSymbol("Hello!");
console.log(resOfArrowFunction);



