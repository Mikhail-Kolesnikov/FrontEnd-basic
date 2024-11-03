const divelement = document.querySelector('int');
let i = 0;
console.log('start');

const interValid = setInterval(
    () => {
        console.log(new Date());
    },
    2000
);

setTimeout(
    () => {
        clearInterval(interValid);
    },
    10000
);
const timeIntervaID = setInterval(
    () => {
        if (i >= 3) {
            clearInterval(timeIntervaID)
        }
        divelement.textContent = i;
        i++;

    },
    1000

)

