let seeTypingAreaBtn = document.getElementById('see-typing-area');
seeTypingArea();

function seeTypingArea() {
  seeTypingAreaBtn.addEventListener('click', function() {
    if (seeTypingAreaBtn.getAttribute('checked')) {
      seeTypingAreaBtn.removeAttribute('checked');
      console.log('checked был', seeTypingAreaBtn.getAttribute('checked'));
  
      return;
    }

    seeTypingAreaBtn.setAttribute('checked', 'checked');
    console.log('checked теперь есть', seeTypingAreaBtn.getAttribute('checked'));
    
    return;
  });
  
  console.log('результат:', seeTypingAreaBtn.getAttribute('checked'));
  return seeTypingAreaBtn.getAttribute('checked');
}

export default seeTypingArea;
