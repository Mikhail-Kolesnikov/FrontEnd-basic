//Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. 
//Функция должна вернуть объект, который содержит свойства, 
//ключ и значение которых равны соответствующему элементу массива. 
//['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const arrToObject = (arr) => {

    const resultObject = {};
    //for (let i = 0; i < arr.length; i++) {

    //    resultObject[arr[i]] = arr[i];
    //}
    arr.forEach((element) => {
        resultObject[element] = element;

    });
    return resultObject;

}
console.log(arrToObject(['a', 36.6, 'John Doe']));

function helloFunction() {
    console.log('hello')
}

