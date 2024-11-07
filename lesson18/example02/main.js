console.log('Start of code');

const randomPromise = fetch('https://official-joke-api.appspot.com/random_joke');

console.log('Finish of sinchone Code');

randomPromise
    .then(
        (resultOfRequest) => {
            return resultOfRequest.json();
        }
    )
    .then(
        (body) => {
            //console.log(body);
            //console.log(body.setup);
            //console.log(body.punchline);
            doSomethingWithBody(body);
        }

    )
function doSomethingWithBody(responseBody) {
    console.log(responseBody);
    const bodyElement = document.querySelector('body');
    const firstPartOfJokeElement = docyment.createElement('p');
    firstPartOfJokeElement.textContent = `${responseBody.setup} ${responseBody.punchline}`;

    bodyElement.append(firstPartOfJokeElement);


    //console.log(responseBody.setup);
    //console.log(responseBody.punchline);
}
