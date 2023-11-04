import startTypingText from './start_typing_text.js';
import { timerID, min, sec } from './timer.js';
import { i } from './check_text_validation.js';
import {text} from './create_text.js'
import showResult from './show_result.js';

let finish = false;

function removeTypingArea() {
  // console.log(text.children.length);
  // console.log(+min, +sec);
  // i = i ?? 0;
  if (i == text.children.length) {
    // || (+min >= 59 && +sec >= 59) || +min == 60
    // условие на проверку минут и секунд должно выполнятся каждую секунду,
    // а не при нажатии как это происходит сейчас
    // Object.defineProperty(Number, i, {
    //   enumerable: true,
    //   configurable: true,
    //   writable: true,
    //   // value: 0,
    // });
    // i = 0;
    
    clearInterval(timerID);
    
    let mainContainer = document.getElementById('main-container');
    let timerElem = document.getElementById('timer');
    let textLength = document.getElementById('text').children.length;
    
    mainContainer.remove();
    showResult(timerElem, textLength);
    startTypingText();

    finish = true;
  }

  if ((+min >= 59 && +sec >= 59) || +min == 60) {
    clearInterval(timerID);
    
    let mainContainer = document.getElementById('main-container');
    let timerElem = document.getElementById('timer');
    let textLength = document.getElementById('text').children.length;
    
    mainContainer.remove();
    showResult(timerElem, textLength);
    startTypingText();

    finish = true;
  }

  return finish;
}

finish = false;

export default removeTypingArea;
