'use strict'

// обнаружил проблему: когда набираешь текст он двигается и так получается,
// что когда нажимаешь пробел(space), а в тексте другой символ отличный от пробела,
// то размеры берутся у символа который в тексе(не в input),
// и поэтому происходит смещение самой середины набора текста влево
// (textMovementLeft(), textMovementRight()),
// но это фиксится простым удалением самого input`а и получением размеров нажатого символа,
// а событие 'keydown' ставится куда-то(еще не придумал))).
// сделаю это в будущем
// ИЛИ ЛУЧШЕ БУДЕТ УСТАНОВИТЬ ОДНО ОБЩЕЕ ЗНАЧЕНИЕ ШИРИНЫ ДЛЯ МАЛЕНЬНИХ,
// БОЛЬШИХ И ОСТАЛЬНЫХ СИМВОЛОВ
import {exceptions} from './modules/exceptions.js';
import timer, {timerID} from './modules/timer.js';

startTypingText();
// Неважно, насколько мы хороши в программировании, иногда наши скрипты содержат ошибки.
function startTypingText() {
  // тут же будет функция для получения текста с какго-нибудь сайта
  let main = document.getElementById('main-page-main');
  let intro = document.getElementById('intro');
  let resultContainer = document.getElementById('result-container')

  main.addEventListener('click', forMainEvent);

  function forMainEvent(event) {
    if (event) {
      main.removeEventListener('click', forMainEvent);
      if (resultContainer) resultContainer.remove();
      if (intro) intro.remove();
      checkTextValidation('Неважно, насколько');
      autoFocusTypingArea();
    }
  }
}

function createText(textForTyping) {
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

  textForTyping = textForTyping.trim();
  let letterArr = textForTyping.split('');
  
  for (let i = 0; i < letterArr.length; i++) {
    let letter = document.createElement('div');
    letter.textContent = letterArr[i];
    // letter.style.width = 30 + 'px';
    
    if (letter.textContent != ' ') {
      text.append(letter);
    } else {
      letter.innerHTML = ' ';
      text.append(letter);
    }
  }

  let typingAreaContainer = document.createElement('div');
  typingAreaContainer.setAttribute('id', 'typing-area-container');
  typingAreaContainer.setAttribute('class', 'typing-area-container');
  mainContainer.append(typingAreaContainer);

  let typingArea = document.createElement('input');
  typingArea.setAttribute('id', 'typing-area');
  typingArea.setAttribute('class', 'typing-area');
  typingArea.setAttribute('type', 'text');
  typingArea.setAttribute('autocomplete', 'off');
  typingAreaContainer.append(typingArea);
  
  return text;
}

function checkTextValidation(textForTyping) {
  let text = createText(textForTyping);
  timer.createTimer();
  focusTypingArea();
  
  let mainContainer = document.getElementById('main-container');
  let typingArea = document.getElementById('typing-area');
  let i = 0;
  let textContainer = document.getElementById('text-container');
  let textChildCoords;
  let letterAccumulator = 0;
  
  timer.startTimer();

  typingArea.addEventListener('keydown', function(event) {
    if (event.key == 'Backspace') {
      if (i == 0) {
        return;
      }
      
      text.children[i - 1].style.backgroundColor = '#F0FFF0';
      text.children[i - 1].style.color = '#483D8B';
      textMovementRight();
      verificationBefore(event, i);
      i--;
      verificationAfter(event, i);
      return;
    }

    if (event.key == text.children[i].textContent) {
      text.children[i].style.backgroundColor = 'green';
      text.children[i].style.color = 'yellow';
      textMovementLeft();
      verificationBefore(event, i);
      i++;
      verificationAfter(event, i);
      removeTypingArea();
      return;
    }
    
    if (event.key != text.children[i].textContent &&
        !exceptions.has(event.key)) {
      text.children[i].style.backgroundColor = 'red';
      text.children[i].style.color = 'pink';
      textMovementLeft();
      verificationBefore(event, i);
      i++;
      verificationAfter(event, i);
      removeTypingArea();
      return;
    }
  });

  function showResult(timerElem) {
    let main = document.getElementById('main-page-main');
    let resultContainer = document.createElement('div');
    resultContainer.setAttribute('id', 'result-container');
    resultContainer.setAttribute('class', 'result-container');
    main.append(resultContainer);
    timer.endTimer(timerElem);
  }
  
  function removeTypingArea(){
    if (i == text.children.length) {
      clearInterval(timerID);
      let timerElem = document.getElementById('timer');
      mainContainer.remove();
      showResult(timerElem);
      startTypingText();
    }
  }

  function textMovementLeft() {
    textChildCoords = text.children[i].getBoundingClientRect();
    textContainer.style.left = letterAccumulator +
                               -textChildCoords.width +
                               'px';
    letterAccumulator += -textChildCoords.width;
  }

  function textMovementRight() {
    textChildCoords = text.children[i].getBoundingClientRect();
    textContainer.style.left = letterAccumulator +
                               textChildCoords.width +
                               'px';
    letterAccumulator += textChildCoords.width;
  }
}

function focusTypingArea() {
  let typingAreaContainer = document.getElementById('typing-area-container');
  let typingArea = document.getElementById('typing-area');
  typingAreaContainer.addEventListener('click', function() {
    typingArea.focus();
  });
}

function autoFocusTypingArea() {
  let typingArea = document.getElementById('typing-area');
  typingArea.focus();
}

function verificationBefore(event, i) {
  console.log(`до ${event.key}: ${i}`);
}

function verificationAfter(event, i) {
  console.log(`после ${event.key}: ${i}`);
}