import { exceptions } from './exceptions.js';
import removeTypingArea from './remove_tipyng_area.js';

let timerID;
let minutsForTimer = 0;
let secondsForTimer = 0;
let min;
let sec;
let finish = false;

function timerIdFunc() {
  timerID = setInterval(timer.timer, 1000);
}

let timer = {
  createTimer() {
    let mainContainer = document.getElementById('main-container');
    let timer = document.createElement('div');
    timer.setAttribute('id', 'timer');
    timer.setAttribute('class', 'timer');
    timer.textContent = '00:00';
    mainContainer.append(timer);
  },

  timer() {
    let timerElem = document.getElementById('timer');
    if (timerElem) {
      secondsForTimer = +secondsForTimer;
      secondsForTimer++;
      minutsForTimer = +minutsForTimer;
      if (secondsForTimer == 60) {
        minutsForTimer++;
        secondsForTimer = 0;
      }

      while (true) {
        if (minutsForTimer == 0) {
          minutsForTimer = '00';
          break;
        }
        if (minutsForTimer > 0 && minutsForTimer < 10) {
          minutsForTimer = `0${minutsForTimer}`;
          break;
        }
        if (minutsForTimer >= 10) {
          break;
        }
      }

      while (true) {
        if (secondsForTimer == 0) {
          secondsForTimer = '00';
          break;
        }
        if (secondsForTimer > 0 && secondsForTimer < 10) {
          secondsForTimer = `0${secondsForTimer}`;
          break;
        }
        if (secondsForTimer >= 10) {
          break;
        }
      }

      removeTypingArea(finish);
      getTime(minutsForTimer, secondsForTimer);

      timerElem.textContent = `${minutsForTimer}:${secondsForTimer}`;
    }
  },

  startTimer() {
    min = 0;
    sec = 0;

    let typingArea = document.getElementById('typing-area');
    typingArea.addEventListener('keydown', startTimerEvent);
    function startTimerEvent(event) {
      if (!exceptions.has(event.key)) {
        console.log('start');
        minutsForTimer = 0;
        secondsForTimer = 0;
        timerIdFunc();
        typingArea.removeEventListener('keydown', startTimerEvent);
      }
    }
  },

  endTimer(timerElem) {
    console.log('end');
    let finishTime = document.createElement('div');
    finishTime.setAttribute('id', 'finish-time');
    finishTime.setAttribute('class', 'finish-elem');
    finishTime.textContent = `Время: ${timerElem.textContent}`;
    this.findResultContainer().append(finishTime);
  },

  showFinishSpeed(timerElem, textLength) {
    let [finishMinuts, finishSeconds] = timerElem.textContent.split(':');

    let finishSpeed = document.createElement('div');
    finishSpeed.setAttribute('id', 'finish-speed');
    finishSpeed.setAttribute('class', 'finish-elem');
    finishSpeed.textContent = `Скорость: ${(
      textLength /
      (+finishMinuts + +(finishSeconds / 60).toFixed(2))
    ).toFixed(2)} сим/мин`;
    this.findResultContainer().append(finishSpeed);
  },

  findResultContainer() {
    return document.getElementById('result-container');
  },
};

function getTime(miN, seC) {
  min = miN;
  sec = seC;
}

export { timerID, min, sec };
export default timer;
