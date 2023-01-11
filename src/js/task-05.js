const ref = {
  nameOutput: document.querySelector('#name-output'),
  nameInput: document.querySelector('#name-input'),
};

ref.nameInput.addEventListener('input', e => {
  ref.nameOutput.textContent = e.currentTarget.value
    ? e.currentTarget.value
    : 'Anonymous';
});
