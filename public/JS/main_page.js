'use strict';

// запретить выделять текст в typingArea если она есть

import { exceptions } from './utilities/exceptions.js';
import timer, { timerID } from './utilities/timer.js';
import textRandomizer from './utilities/text_randomizer.js';
import createText from './utilities/create_text.js';

startTypingText();

let resJson;

async function textRequest(screen) {
  if (!resJson) {
    let res = await fetch(
      'http://localhost:8000/public/JSON/texts_for_typing.json',
      {
        method: 'GET',
      }
    );
    resJson = await res.json();
  }

  if (screen) screen.remove();
  checkTextValidation(textRandomizer(resJson));
  autoFocusTypingArea();
}

function startTypingText() {
  let main = document.getElementById('main-page-main');
  let intro = document.getElementById('intro');
  let resultContainer = document.getElementById('result-container');

  main.addEventListener('click', forMainEvent);

  function forMainEvent(event) {
    if (event) {
      main.removeEventListener('click', forMainEvent);
      loadScreen(resultContainer ?? intro);
      textRequest(resultContainer ?? intro);
    }
  }

  function loadScreen(screen) {
    screen.textContent = 'Ждем загрузки текста...';
    console.log('from loadScreen');
  }
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

  typingArea.addEventListener('keydown', function (event) {
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

    if (
      event.key != text.children[i].textContent &&
      !exceptions.has(event.key)
    ) {
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

  function removeTypingArea() {
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
    textContainer.style.left =
      letterAccumulator + -textChildCoords.width.toFixed(2) + 'px';
    letterAccumulator += -textChildCoords.width.toFixed(2);
  }

  function textMovementRight() {
    textChildCoords = text.children[i - 1].getBoundingClientRect();
    textContainer.style.left =
      letterAccumulator + +textChildCoords.width.toFixed(2) + 'px';
    letterAccumulator += +textChildCoords.width.toFixed(2);
  }
}

function focusTypingArea() {
  let typingAreaContainer = document.getElementById('typing-area-container');
  let typingArea = document.getElementById('typing-area');
  typingAreaContainer.addEventListener('click', function () {
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