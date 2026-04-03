import './style.css';

let count = 0;

const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function render() {
  countEl.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count++;
  render();
});

decrementBtn.addEventListener('click', () => {
  count--;
  render();
});
