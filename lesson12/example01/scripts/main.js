//Нахождение элемента
const h1Element = document.querySelector('.header');
console.log(h1Element);
//Замена текста внутри элемента
h1Element.textContent = 'Document object model';
//Замена набора классов(стилизация)
h1Element.classList.add('red');
h1Element.classList.remove('blue');
h1Element.classList.toggle('black');
//если класс есть-удаляет, если нет-добавляет

// """удаление элементов со страницы"

//Наодим элемент
const linkToDeleteElement = document.querySelector('.link');
//console.log(linkToDeleteElement);
//удаляем элемент
linkToDeleteElement.remove();

//"""Добавление новых элементов на страницу"
const newParagraphElement = document.createElement('p');
//console.log(newParagraphElement);
newParagraphElement.textContent = 'Текст внутри параграфа';
console.log(newParagraphElement);

const bodyElement = document.querySelector('body');
bodyElement.append(newParagraphElement);


const buttoElement = document.querySelector('button');
const reultElement = document.querySelector('.result');

const inputElements = document.querySelectorAll('input');
//inputElements[0];
//inputElements[1];
buttoElement.addEventListener('click', buttonClickHandler);


function buttonClickHandler() {
    let summ;
    const s1 = inputElements[0].value;
    const s2 = inputElements[1].value;
    summ = +s1 + +s2;
    reultElement.textContent = summ;
    console.log(summ)
}
