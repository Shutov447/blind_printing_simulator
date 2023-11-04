import timer from './timer.js';

function showResult(timerElem, textLength) {
  let main = document.getElementById('main-page-main');
  let resultContainer = document.createElement('div');
  resultContainer.setAttribute('id', 'result-container');
  resultContainer.setAttribute('class', 'result-container');
  main.append(resultContainer);
  timer.endTimer(timerElem);
  timer.showFinishSpeed(timerElem, textLength);
}

export default showResult;