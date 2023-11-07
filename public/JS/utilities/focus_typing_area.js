function focusTypingArea() {
  let typingArea = document.getElementById('typing-area');
  let nonAllocated = document.getElementById('non-allocated');
  let textContainer = document.getElementById('text-container');

  nonAllocated.addEventListener('click', function () {
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

export { focusTypingArea, autoFocusTypingArea };
