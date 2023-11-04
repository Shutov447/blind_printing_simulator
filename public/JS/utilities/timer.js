import { exceptions } from './exceptions.js';
import removeTypingArea from './remove_tipyng_area.js';
// let timerID;
// class Timer {
//   constructor() {
//     // this.timerID;
//     this.minutsForTimer = 0;
//     this.secondsForTimer = 0;
//     // this.timerElem;
//     // this.timerElem = document.getElementById('timer');
//     this.toggle = true;
//   }

//   // static timerID;

//   createTimer(mainContainer) {
//     // let mainContainer = document.getElementById('main-container');
//     let timerElem = document.createElement('div');
//     timerElem.setAttribute('id', 'timer');
//     timerElem.setAttribute('class', 'timer');
//     timerElem.textContent = '00:00';
//     mainContainer.append(timerElem);
//   }

//   timer() {
//     let timerElem = document.getElementById('timer');
//     console.log(timerElem);
//     if (timerElem) {
//       console.log(timerElem);
//       this.secondsForTimer = +this.secondsForTimer;
//       this.secondsForTimer++;
//       this.minutsForTimer = +this.minutsForTimer;
//       if (this.secondsForTimer == 60) {
//         this.minutsForTimer++;
//         // this.minutsForTimer += 60;
//         this.secondsForTimer = 0;
//       }

//       while (true) {
//         if (this.minutsForTimer == 0) {
//           this.minutsForTimer = '00';
//           break;
//         }
//         if (this.minutsForTimer > 0 && this.minutsForTimer < 10) {
//           this.minutsForTimer = `0${this.minutsForTimer}`;
//           break;
//         }
//         if (this.minutsForTimer >= 10) {
//           break;
//         }
//       }

//       while (true) {
//         if (this.secondsForTimer == 0) {
//           this.secondsForTimer = '00';
//           break;
//         }
//         if (this.secondsForTimer > 0 && this.secondsForTimer < 10) {
//           this.secondsForTimer = `0${this.secondsForTimer}`;
//           break;
//         }
//         if (this.secondsForTimer >= 10) {
//           break;
//         }
//       }

//       timerElem.textContent = `${this.minutsForTimer}:${this.secondsForTimer}`;
//     }
//   }

//   timerIdFunc() {
//     console.log('here 1');
//     timerID = setInterval(this.timer, 1000);
//     console.log(timerID, this.timer);
//     console.log('here 2');
//   }

//   startTimer() {
//     if (this.toggle) {
//       // if (!exceptions.has(event.key)) {
//       console.log('start');
//       this.minutsForTimer = 0;
//       this.secondsForTimer = 0;
//       console.log(this.timerIdFunc, this.minutsForTimer);
//       this.timerIdFunc(); //
//       this.toggle = false;
//       // }
//       // this.timerIdFunc = this.timerIdFunc; //
//       // let typingArea = document.getElementById('typing-area');
//       // typingArea.addEventListener('keydown', startTimerEvent);
//       // function startTimerEvent(event) {
//       //   if (!exceptions.has(event.key)) {
//       //     console.log('start');
//       //     this.minutsForTimer = 0;
//       //     this.secondsForTimer = 0;
//       //     this.timerIdFunc(); //
//       //     typingArea.removeEventListener('keydown', startTimerEvent);
//       //   }
//     }
//   }

//   endTimer(timerElem) {
//     // endTimer(timerElem)
//     console.log('end');
//     let finishTime = document.createElement('div');
//     finishTime.setAttribute('id', 'finish-time');
//     finishTime.setAttribute('class', 'finish-elem');
//     finishTime.textContent = `Время: ${timerElem.textContent}`;
//     // finishTime.textContent = `Время: ${this.timerElem.textContent}`;
//     this.findResultContainer().append(finishTime);

//     console.log(timerID);
//     clearInterval(timerID);
//   }

//   showFinishSpeed(timerElem, textLength) {
//     let [finishMinuts, finishSeconds] = timerElem.textContent.split(':');
//     finishMinuts = +finishMinuts;
//     finishSeconds = +finishSeconds;

//     let finishSpeed = document.createElement('div');
//     finishSpeed.setAttribute('id', 'finish-speed');
//     finishSpeed.setAttribute('class', 'finish-elem');
//     finishSpeed.textContent = `Скорость: ${(
//       textLength / (finishMinuts + finishSeconds / 60).toFixed(2)
//     ).toFixed(2)} сим/мин`;
//     this.findResultContainer().append(finishSpeed);
//   }

//   findResultContainer() {
//     return document.getElementById('result-container');
//   }
// }

// export default Timer;

//////////////this.minutsForTimer this.secondsForTimer

////////////// версия 2

class Timer {}

////////////////

let timerID;
let minutsForTimer = 0;
let secondsForTimer = 0;
let min;
let sec;

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
        // minutsForTimer++;
        minutsForTimer = +60;
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

      getTime(minutsForTimer, secondsForTimer);

      removeTypingArea();

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
    finishMinuts = +finishMinuts;
    finishSeconds = +finishSeconds;

    let finishSpeed = document.createElement('div');
    finishSpeed.setAttribute('id', 'finish-speed');
    finishSpeed.setAttribute('class', 'finish-elem');
    finishSpeed.textContent = `Скорость: ${(
      textLength / (finishMinuts + finishSeconds / 60).toFixed(2)
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
  // return {min, sec};
}

export { timerID, min, sec };
export default timer;

