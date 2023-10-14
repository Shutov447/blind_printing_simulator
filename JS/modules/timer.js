let timerID;
let minutsForTimer = 0;
let secondsForTimer = 0;
let startTime;
let endTime;

function createTimer() {
  let mainContainer = document.getElementById('main-container');
  let timer = document.createElement('div');
  timer.setAttribute('id', 'timer');
  timer.setAttribute('class', 'timer');
  timer.textContent = '00:00';
  mainContainer.append(timer);
}

function timer() {
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
    
    timerElem.textContent = `${minutsForTimer}:${secondsForTimer}`;
  }
}

function timerIdFunc() {
  timerID = setInterval(timer, 1000);
}

function startTimer() {
  let typingArea = document.getElementById('typing-area');
  typingArea.addEventListener('keydown', startTimerEvent);
  function startTimerEvent(event) {
    if (!exceptions.has(event.key)) {
      console.log('start');
      minutsForTimer = 0;
      secondsForTimer = 0;
      timerIdFunc();
      startTime = new Date;
      startTime = startTime.getTime();
      typingArea.removeEventListener('keydown', startTimerEvent);
    }
  }
};

function endTimer() {
  console.log('end');
  endTime = new Date;
  endTime = endTime.getTime();
};

function showResultTime() {
  const time = endTime - startTime;
  console.log(time);
  let seconds = Math.floor(time / 1_000);
  let minuts = Math.floor(seconds / 60);
  seconds %= 60;
  let resultContainer = document.getElementById('result-container');
  let finishTime = document.createElement('div');
  finishTime.setAttribute('id', 'finish-time');
  finishTime.setAttribute('class', 'finish-time');
  if (minuts < 10) minuts = '0' + minuts;
  if (seconds < 10) seconds = '0' + seconds;
  finishTime.textContent = `Время прохождения: ${minuts}:${seconds}`;
  resultContainer.append(finishTime);
};