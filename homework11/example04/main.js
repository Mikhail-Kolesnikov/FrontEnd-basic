//Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, 
//но значения свойств - это объект содержащий исходное значение, и его тип.
//Пример:
//{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, 
//'36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

const objAndValue = { a: 45, b : true, c :'abc'};
const obj = (n) => {

    const objToValue = {};


    Object.entries(n).forEach((element) => {
        objToValue[element[0]] =  { value: element[1], type: typeof element[1] };//typeof element[1];
        


    });

    return objToValue;



}
console.log(obj(objAndValue));