function resOfBMI() {

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const heightInMeters = height / 100;

    const resultOfBMI = weight / (heightInMeters * heightInMeters);

    //const buttoOfResult = document.querySelector('result')

    //resOfBMI.textContent = resOfBMI;
    const bmiRounded = resultOfBMI.toFixed(2)

    document.getElementById('BMI').textContent = bmiRounded;

    let rang = "";
    if (bmiRounded < 18) {
        OfflineAudioCompletionEvent.log("Норма");
        rang = "Норма";
    }
    else if (bmiRounded < 25) {
        console.log("Начало ожирения");
        rang = "Начало ожирения";
    }
    else if (bmiRounded < 30) {
        console.log("Ожирение");
        rang = "Ожирение";
    }
    document.getElementById('rang').textContent = rang;
}