console.log('start');
//const userName = prompt('Enter your name: ');
const inputNameElement = document.querySelector('#user-name');
const buttonElement = document.querySelector('button');


inputNameElement.addEventListener('input', () => {
    //console.log('input is changed');
    const userName = inputNameElement.value;
    console.log(`Hello, ${userName}`);
})
buttonElement.addEventListener('click', () => {
    console.log('click');

})
console.log('start loop');
//for (let i = 0; i < 5000000; i++) {
//}
console.log('finish loop');



console.log(`Finish of code`);



//alert('All is going well');