function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  colorInterface: document.querySelector('.widget .color'),
  colorChangeBtn: document.querySelector('.widget .change-color'),
};
ref.colorChangeBtn.addEventListener('click', () => {
  ref.colorInterface.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
});
