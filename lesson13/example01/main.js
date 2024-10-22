const arr123 = [5, 10, 30];
const multiple2 = (x) => {
    return x * 2;
}
const arr123modified = arr123.map(multiple2);

console.log(arr123modified);

const aarOfPeople = [
    { name: 'john', age: 50 },
    { name: 'Bred', age: 50 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 }
];

const addAdult = (human) => {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'];

    //let isAdult;
    //if (resultObj.age >= 18) {
    //   isAdult = true;
    //} else {
    //   isAdult = false;
    //}


    const isAdult = resultObj.age >= 18 ? true : false;
    resultObj.anniversary = isAdult;
    return resultObj;


}

const arrOfPeopleModifeid = aarOfPeople.map(addAdult);
console.log(arrOfPeopleModifeid);

const addAge = (age) => {

    const resAge = { ...age };
    //resAge.name = age.name;
    resAge.age = age.age + 1;
    return resAge;

}

const arrOfAge = aarOfPeople.map(addAge);
console.log(arrOfAge);

//spread

//const sourceArray = [1, 2, 3];

//const copyOfArray = [...sourceArray];

//const sourceObj = { name: 'john', age: 50 };
//const copyOfObj = { ...sourceObj };

//Filter

const arrOfNumber = [1, 17, 1, 2, 9, 4, 19, 189, 56];

const filter17 = (num) => {
    if (num >= 17) {
        return true;
    } else {
        false;
    }
};

const arrOf17 = arrOfNumber.filter(filter17);
console.log(arrOf17);

const aarOfPeople2 = [
    { name: 'john', age: 16 },
    { name: 'Bred', age: 50 },
    { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 17 }

]
const filterOfAge = (age18) => {


    if (age18.age >= 18) {
        return true;
    } else {
        return false;
    }
}
    
    console.log(aarOfPeople2.filter(filterOfAge));





