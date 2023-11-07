let seeTypingAreaBtn = document.getElementById('see-typing-area');
seeTypingArea();

function seeTypingArea() {
  seeTypingAreaBtn.addEventListener('click', function() {
    if (seeTypingAreaBtn.getAttribute('checked')) {
      seeTypingAreaBtn.removeAttribute('checked');

      return;
    }

    seeTypingAreaBtn.setAttribute('checked', 'checked');

    return;
  });
  
  return seeTypingAreaBtn.getAttribute('checked');
}

export default seeTypingArea;
