const buttons = document.querySelectorAll('.boton');
const textElements = document.querySelectorAll('.hide');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show');
  });
});