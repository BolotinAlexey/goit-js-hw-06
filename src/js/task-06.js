const inputEl = document.querySelector('#validation-input');
const numberMinChar = inputEl.dataset.length;
const onInputBlur = e => {
  console.log(e.currentTarget.value.length);
};
inputEl.addEventListener('blur', e => {
  inputEl.classList =
    e.currentTarget.value.length < numberMinChar ? 'invalid' : 'valid';
});
