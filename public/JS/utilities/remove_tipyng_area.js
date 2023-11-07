import startTypingText from './start_typing_text.js';
import { timerID, min, sec } from './timer.js';
import { i } from './check_text_validation.js';
import { text } from './create_text.js';
import showResult from './show_result.js';

function removeTypingArea(finish) {
  if (i == text.children.length) {
    assistRemoveTypingArea();
    finish = true;
  } else if ((+min >= 59 && +sec >= 59) || +min >= 60) {
    assistRemoveTypingArea();
    finish = true;
  }

  return finish;
}

function assistRemoveTypingArea() {
  clearInterval(timerID);

  let mainContainer = document.getElementById('main-container');
  let timerElem = document.getElementById('timer');
  let textLength = document.getElementById('text').children.length;

  mainContainer.remove();
  showResult(timerElem, textLength);
  startTypingText();
}

export default removeTypingArea;
