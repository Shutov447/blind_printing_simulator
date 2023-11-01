function focusTypingArea() {
  let typingArea = document.getElementById('typing-area');
  let typingAreaContainer = document.getElementById('typing-area-container');
  let textContainer = document.getElementById('text-container');

  typingAreaContainer.addEventListener('click', function () {
    typingArea.focus();
  });
  
  textContainer.addEventListener('click', function () {
    typingArea.focus();
  });
}

function autoFocusTypingArea() {
  let typingArea = document.getElementById('typing-area');
  typingArea.focus();
}

export {focusTypingArea, autoFocusTypingArea};