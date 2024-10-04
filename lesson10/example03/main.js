const arrOfNumbers = (arr) => {

    const element = [];



    for (i = 0; i < arr.length; i++) {
        element.push(arr[i] * arr[i]);

    }

    return element;



}; console.log(arrOfNumbers([9, 10, 4, 3, 7]));




