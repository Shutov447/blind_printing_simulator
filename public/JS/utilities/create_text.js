import createTypingArea from "./create_typing_area.js";

export default function createText(textForTyping) {
  let main = document.getElementById('main-page-main');

  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  mainContainer.setAttribute('class', 'main-container');
  main.append(mainContainer);

  let textContainer = document.createElement('div');
  textContainer.setAttribute('id', 'text-container');
  textContainer.setAttribute('class', 'text-container');
  mainContainer.append(textContainer);

  let text = document.createElement('div');
  text.setAttribute('id', 'text');
  text.setAttribute('class', 'text');
  textContainer.append(text);

  let letterArr = textForTyping.split('');

  for (let i = 0; i < letterArr.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = letterArr[i];

    if (letter.textContent != ' ') {
      text.append(letter);
    } else {
      letter.innerHTML = ' ';
      text.append(letter);
    }
  }

  createTypingArea(mainContainer)

  return text;
}