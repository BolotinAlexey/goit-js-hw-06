function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  inputNumber: document.querySelector('#controls input'),
  boxesEl: document.querySelector('#boxes'),
};

ref.createBtn.addEventListener('click', () => {
  createBoxes(ref.inputNumber.value);
});
ref.destroyBtn.addEventListener('click', () => {
  ref.boxesEl.innerHTML = '';
});

function createBoxes(amount) {
  const newBoxes = [];
  for (let index = 0; index < amount; index++) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = boxEl.style.height = `${30 + 10 * index}px`;
    newBoxes.push(boxEl);
  }
  ref.boxesEl.append(...newBoxes);
}
