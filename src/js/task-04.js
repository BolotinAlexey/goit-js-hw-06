class Counter {
  #counterValue;
  constructor({ value = 0, decrementButton, incrementButton, valueInterface }) {
    this.#counterValue = value;
    this.valueInterface = valueInterface;
    decrementButton.addEventListener('click', () => {
      this.decrementCounterValue();
    });

    incrementButton.addEventListener('click', () => {
      this.incrementCounterValue();
    });
  }

  get counterValue() {
    return this.#counterValue;
  }

  set counterValue(value) {
    this.#counterValue = value;
  }

  decrementCounterValue() {
    this.#counterValue--;
    this.changeValueInterface();
  }

  incrementCounterValue() {
    this.#counterValue++;
    this.changeValueInterface();
  }

  changeValueInterface() {
    this.valueInterface.textContent = this.#counterValue;
  }
}

const ref = {
  decrementButton: document.querySelector('[data-action=decrement]'),
  valueInterface: document.querySelector('#value'),
  incrementButton: document.querySelector('[data-action=increment]'),
};

const counter = new Counter(ref);

// ----------OR------------

// let counterValue = 0;
// ref.incrementButton.addEventListener('click', () => {
//     ref.valueInterface.textContent = `${--counterValue}`;

// });
// ref.decrementButton.addEventListener('click', () => {
//   ref.valueInterface.textContent = `${++counterValue}`;

// });
