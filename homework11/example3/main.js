//Функция должна принимать объект и возвращать строку, 
//где будут перечислены все значения свойств объекта через запятую.
//Пример работы функции:
//{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

//const arrToLineOfObject = (arr) => {
//const resultOfLine = {};

//arr.forEach((element) => {
//resultOfLine[element[0]] = element[1];

//});
//return arrToLineOfObject;

//}
//console.log(arrToLineOfObject({
//   a: 'a', '36.6': 36.6, 'John Doe': 'John Doe'
//}));

const obj = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

const valueOfObject = (n) =>{
    const res = Object.values(n);
    

    //let line = '';

    //res.forEach((func)=>{
        //line = res + func + ', ';

    //})
    
    return res.join(', ');
    //console.log(res);
}
//valueOfObject(obj);
console.log(valueOfObject(obj));



//const object1 = {
  //  a: 'somestring',
   // b: 42,
  //  c: false,
  //};
  
  //console.log(Object.values(object1));
  // Expected output: Array ["somestring", 42, false]
  
