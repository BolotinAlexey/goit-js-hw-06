const fontSizeControlEl = document.querySelector('#font-size-control'); // input#font-size-control
const textIntrfaceEl = document.querySelector('#text'); //input#text
fontSizeControlEl.addEventListener('input', e => {
  textIntrfaceEl.style.fontSize = `${e.currentTarget.value}px`;
});
