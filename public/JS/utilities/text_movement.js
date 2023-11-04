class TextMovement {
  constructor(text, textContainer) {
    this.textContainer = textContainer;
    this.text = text;
    this.textChildCoords;
    this.letterAccumulator = 0;
  }

  left(index) {
    this.textChildCoords = this.text.children[index].getBoundingClientRect();
    this.textContainer.style.left =
      this.letterAccumulator + -this.textChildCoords.width.toFixed(2) + 'px';
    this.letterAccumulator += -this.textChildCoords.width.toFixed(2);
  }

  right(index) {
    this.textChildCoords = this.text.children[index - 1].getBoundingClientRect();
    this.textContainer.style.left =
      this.letterAccumulator + +this.textChildCoords.width.toFixed(2) + 'px';
    this.letterAccumulator += +this.textChildCoords.width.toFixed(2);
  }
}

export default TextMovement;