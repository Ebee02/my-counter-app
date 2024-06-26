let counter = 1;
let counterEl = document.getElementById("count-el");

const onHandleIncrementCounter = () => {
  counter++;
  counterEl.textContent = counter;
};

const onHandleDecrementCounter = () => {
  counter--;
  counterEl.textContent = counter;
};

const onHandleResetCounter = () => {
  counter = 0;
  counterEl.textContent = counter;
};
