const value = document.getElementById('value');
const decrementButton = document.querySelectorAll(
  "[data-action='decrement']"
)[0];
const incrementButton = document.querySelectorAll(
  "[data-action='increment']"
)[0];

let counterValue = Number(value.innerHTML);
const incr
const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);
const updateValue = () => (value.innerHTML = counterValue);

incrementButton.onclick = () => {
  increment();
  updateValue();
}

decrementButton.onclick = () => {
  decrement();
  updateValue();
};
