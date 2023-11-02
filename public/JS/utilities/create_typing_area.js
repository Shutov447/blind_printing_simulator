export default function createTypingArea(mainContainer) {
  let typingAreaContainer = document.createElement('div');
  typingAreaContainer.setAttribute('id', 'typing-area-container');
  typingAreaContainer.setAttribute('class', 'typing-area-container');
  mainContainer.append(typingAreaContainer);

  let typingArea = document.createElement('input');
  typingArea.setAttribute('id', 'typing-area');
  typingArea.setAttribute('class', 'typing-area');
  typingArea.setAttribute('type', 'text');
  typingArea.setAttribute('autocomplete', 'off');
  typingAreaContainer.append(typingArea);

  let seeTypingAreaBtn = document.getElementById('see-typing-area');

  checkBox(seeTypingAreaBtn, typingAreaContainer);
  
  seeTypingAreaBtn.addEventListener('click', function() {
    checkBox(seeTypingAreaBtn, typingAreaContainer);
  });
}

function checkBox(seeTypingAreaBtn, typingAreaContainer) {
  if (seeTypingAreaBtn.getAttribute('checked')) {
    typingAreaContainer.setAttribute('style', 'position: relative; z-index: auto;');
    seeTypingAreaBtn.setAttribute('checked', 'checked');

    return;
  }
  
  typingAreaContainer.setAttribute('style', 'position: absolute; z-index: -9;');
  seeTypingAreaBtn.removeAttribute('checked');
}