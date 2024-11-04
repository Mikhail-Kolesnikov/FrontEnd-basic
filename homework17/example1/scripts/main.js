const timeInput = document.querySelector('#time');
const input = document.querySelector('#time');
const button = document.querySelector('#button');
const display = document.querySelector('#display');
let start;
button.addEventListener('click', () => {
    clearInterval(start);
    let time = parseInt(timeInput.value);

    start = setInterval(() => {

        display.textContent = time;

        if (time <= 0) {
            clearInterval(start);
        } else {
            time--;
        }
    }, 1000);
});