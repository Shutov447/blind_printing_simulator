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
}