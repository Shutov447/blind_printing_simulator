'use strict';

import startTypingText from './utilities/start_typing_text.js';
// import textRequest from './utilities/text_request.js';

// автоматичнески завершать попытку если прошел час

// import { exceptions } from './utilities/exceptions.js';
// import timer, { timerID, min, sec } from './utilities/timer.js';
// // import Timer from './utilities/timer.js';
// import textRandomizer from './utilities/text_randomizer.js';
// import createText from './utilities/create_text.js';
// import {
//   focusTypingArea,
//   autoFocusTypingArea,
// } from './utilities/focus_typing_area.js';
// import SymbolVerification from './utilities/symbol_verification.js';
// import TextMovement from './utilities/text_movement.js';

startTypingText();

// let resJson;
// const verification = new SymbolVerification();
// const timer = new Timer();

// async function textRequest(screen) {
//   if (!resJson) {
//     let res = await fetch(
//       'http://localhost:8000/public/JSON/texts_for_typing.json',
//       {
//         method: 'GET',
//       }
//     );
//     resJson = await res.json();
//   }

//   if (screen) screen.remove();
//   checkTextValidation(textRandomizer(resJson));
//   autoFocusTypingArea();
// }
  
// function startTypingText() {
//   let main = document.getElementById('main-page-main');
//   let intro = document.getElementById('intro');
//   let resultContainer = document.getElementById('result-container');

//   main.addEventListener('click', forMainEvent);

//   function forMainEvent(event) {
//     if (event) {
//       main.removeEventListener('click', forMainEvent);
//       loadScreen(resultContainer ?? intro);
//       textRequest(resultContainer ?? intro);
//     }
//   }

//   function loadScreen(screen) {
//     screen.textContent = 'Ждем загрузки текста...';
//   }
// }

// function checkTextValidation(textForTyping) {
//   let i = 0;

//   const textMovement = new TextMovement(
//     createText(textForTyping),
//     document.getElementById('text-container')
//   );

//   let mainContainer = document.getElementById('main-container');
//   let typingArea = document.getElementById('typing-area');

//   timer.createTimer();

//   focusTypingArea();

//   timer.startTimer();

//   typingArea.addEventListener('keydown', function (event) {
//     if (event.key == 'Backspace') {
//       if (i == 0) {
//         return;
//       }

//       text.children[i - 1].style.backgroundColor = '#F0FFF0';
//       text.children[i - 1].style.color = '#483D8B';
//       textMovement.right(i);
//       verification.before(event, i);
//       i--;
//       verification.after(event, i);
//       return;
//     }

//     if (event.key == text.children[i].textContent) {
//       text.children[i].style.backgroundColor = 'green';
//       text.children[i].style.color = 'yellow';
//       textMovement.left(i);
//       verification.before(event, i);
//       i++;
//       verification.after(event, i);
//       removeTypingArea();
//       return;
//     }

//     if (
//       event.key != text.children[i].textContent &&
//       !exceptions.has(event.key)
//     ) {
//       text.children[i].style.backgroundColor = 'red';
//       text.children[i].style.color = 'pink';
//       textMovement.left(i);
//       verification.before(event, i);
//       i++;
//       verification.after(event, i);
//       removeTypingArea();
//       return;
//     }
//   });

  // function showResult(timerElem, textLength) {
  //   let main = document.getElementById('main-page-main');
  //   let resultContainer = document.createElement('div');
  //   resultContainer.setAttribute('id', 'result-container');
  //   resultContainer.setAttribute('class', 'result-container');
  //   main.append(resultContainer);
  //   timer.endTimer(timerElem);
  //   timer.showFinishSpeed(timerElem, textLength);
  // }
  // text, mainContainer, startTypingText(), showResult(timerElem, textLength)
  // function removeTypingArea() {
  //   console.log(+min, +sec);
  //   if (i == text.children.length || (+min >= 59 && +sec >= 59) || +min == 60) {
  //     // условие на проверку минут и секунд должно выполнятся каждую секунду,
  //     // а не при нажатии как это происходит сейчас

  //     clearInterval(timerID);

  //     let timerElem = document.getElementById('timer');
  //     let textLength = document.getElementById('text').children.length;

  //     mainContainer.remove();
  //     showResult(timerElem, textLength);
  //     startTypingText();
  //   }
  // }
// }
