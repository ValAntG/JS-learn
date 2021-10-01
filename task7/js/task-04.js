const value = document.getElementById('value');
const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

let counterValue = Number(value.innerHTML);

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);
const updateValue = () => (value.innerHTML = counterValue);

incrementButton.onclick = () => {
  increment();
  updateValue();
};

decrementButton.onclick = () => {
  decrement();
  updateValue();
};
