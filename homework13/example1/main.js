//Надо добавить каждому игроку ключ(свойство) 'goals' и туда записать случайное целое число от 0 до 20. 
//При этом должен быть сформирован новый массив.
//Отфильтровать и вывести в консоль всех игроков, у которых рост выше или равен 180 и вес ниже 80.

const listOfPlayers = [
    { name: "Alex", height: 190, weight: 85, sport: "rugby" },
    { name: "Boris", height: 180, weight: 75, sport: "football" },
    { name: "Vladimir", height: 175, weight: 70, sport: "hockey" },
    { name: "George", height: 185, weight: 80, sport: "rugby" },
    { name: "Dmitry", height: 170, weight: 65, sport: "hockey" },
    { name: "Eugene", height: 195, weight: 90, sport: "football" },
    { name: "Zachary", height: 188, weight: 82, sport: "rugby" },
    { name: "Ivan", height: 182, weight: 77, sport: "football" },
    { name: "Kirill", height: 178, weight: 73, sport: "hockey" },
    { name: "Leonid", height: 192, weight: 87, sport: "rugby" },
    { name: "Michael", height: 176, weight: 71, sport: "hockey" },
    { name: "Nicholas", height: 198, weight: 93, sport: "football" },
    { name: "Oleg", height: 186, weight: 79, sport: "rugby" },
    { name: "Paul", height: 174, weight: 69, sport: "hockey" },
    { name: "Roman", height: 184, weight: 78, sport: "football" }
];

const keysOfGoals = (goals) => {
    const resOfGoals = { ...goals };
    resOfGoals.goals = Math.floor((Math.random()) * 20);
    return resOfGoals;
}

const goals = listOfPlayers.map(keysOfGoals);
console.log(goals);

const heightAndWeight = (wh) => {
    if (wh.height >= 180 && wh.weight <= 80) {
        return true;
    } else {
        return false;
    }

}
console.log(listOfPlayers.filter(heightAndWeight));

const links = [
    {
        text: "Home",
        url: "/home",
        order: 1
    },
    {
        text: "About Us",
        url: "/about",
        order: 5
    },
    {
        text: "Services",
        url: "/services",
        order: 4
    },
    {
        text: "Contact",
        url: "/contact",
        order: 3
    },
    {
        text: "Blog",
        url: "/blog",
        order: 2
    }
];




const resOfres = links.sort(
    (a, b) => {
        return a.order - b.order
    }
);
console.log(resOfres);


