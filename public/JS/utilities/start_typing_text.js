import textRequest from "./text_request.js";

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
  }
}

export default startTypingText;