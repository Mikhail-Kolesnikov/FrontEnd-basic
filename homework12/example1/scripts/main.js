function resOfBMI (){

const height = parseFloat(document.getElementById('height').value);
const weight = parseFloat(document.getElementById('weight').value);

const heightInMeters = height / 100;

const resultOfBMI = weight / (heightInMeters * heightInMeters);

//const buttoOfResult = document.querySelector('result')

//resOfBMI.textContent = resOfBMI;
const bmiRounded = resultOfBMI.toFixed(2)

document.getElementById('BMI').textContent = bmiRounded;
}