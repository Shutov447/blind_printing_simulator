import { exceptions } from './exceptions.js';
import timer from './timer.js';
import createText from './create_text.js';
import { focusTypingArea, autoFocusTypingArea } from './focus_typing_area.js';
import TextMovement from './text_movement.js';
import SymbolVerification from './symbol_verification.js';
import removeTypingArea from './remove_tipyng_area.js';

const verification = new SymbolVerification();
let i = 0;

// let obj = {i: 0};

// Object.defineProperty(new Number, 'i', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: 0,
// });

// let i = obj.i;

function checkTextValidation(textForTyping) {
  // let i = 0;

  const textMovement = new TextMovement(
    createText(textForTyping),
    document.getElementById('text-container')
  );

  // let mainContainer = document.getElementById('main-container');
  let typingArea = document.getElementById('typing-area');

  timer.createTimer();

  focusTypingArea();

  timer.startTimer();

  typingArea.addEventListener('keydown', function (event) {
    if (event.key == 'Backspace') {
      if (i == 0) {
        return;
      }

      text.children[i - 1].style.backgroundColor = '#F0FFF0';
      text.children[i - 1].style.color = '#483D8B';
      textMovement.right(i);
      verification.before(event, i);
      i--;
      verification.after(event, i);
      return;
    }

    if (event.key == text.children[i].textContent) {
      text.children[i].style.backgroundColor = 'green';
      text.children[i].style.color = 'yellow';
      textMovement.left(i);
      verification.before(event, i);
      i++;
      verification.after(event, i);
      // removeTypingArea();
      if (removeTypingArea()) {
        i = 0;
      }
      return;
    }

    if (
      event.key != text.children[i].textContent &&
      !exceptions.has(event.key)
    ) {
      text.children[i].style.backgroundColor = 'red';
      text.children[i].style.color = 'pink';
      textMovement.left(i);
      verification.before(event, i);
      i++;
      verification.after(event, i);
      // removeTypingArea();
      if (removeTypingArea()) {
        i = 0;
      }
      return;
    }
  });
}

export { i };
export default checkTextValidation;
