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

  let nonAllocated = document.createElement('div');
  nonAllocated.setAttribute('id', 'non-allocated');
  nonAllocated.setAttribute('class', 'non-allocated');
  mainContainer.append(nonAllocated);

  let seeTypingAreaBtn = document.getElementById('see-typing-area');

  checkBox(seeTypingAreaBtn, typingAreaContainer, nonAllocated);

  seeTypingAreaBtn.addEventListener('click', function () {
    checkBox(seeTypingAreaBtn, typingAreaContainer, nonAllocated);
  });
}

function checkBox(seeTypingAreaBtn, typingAreaContainer, nonAllocated) {
  if (seeTypingAreaBtn.getAttribute('checked')) {
    typingAreaContainer.setAttribute(
      'style',
      'position: relative; z-index: auto;'
    );
    nonAllocated.setAttribute('style', 'position: absolute; z-index: 1;');
    seeTypingAreaBtn.setAttribute('checked', 'checked');

    return;
  }

  typingAreaContainer.setAttribute('style', 'position: absolute; z-index: -9;');
  nonAllocated.setAttribute('style', 'position: absolute; z-index: -10;');
  seeTypingAreaBtn.removeAttribute('checked');
}
