const buttonElement = document.querySelector('button');
const btnClickHandler = () => {
    const bodyElement = document.querySelector('body');
    bodyElement.append('Hello');
}
//buttonElement.addEventListener("click", btnClickHandler);
const waitForClickpromise = new Promise(
    (resolver)=>{
        buttonElement.addEventListener("click", btnClickHandler);
    }

);
waitForClickpromise.then(btnClickHandler);
  