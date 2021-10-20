let prevTimer = 0;
let timer = 0;
let counter = 20;
const INTERVAL = 1000;

const timerEl = document.querySelector(".timer-wrap");

function decreaseCounter() {
  // console.log(counter);
  timerEl.textContent = counter;
  counter -= 1;
}

function rePaint(currentTimer) {
  // console.log(currentTimer - prevTimer);
  // console.log(timer);

  if (timer < currentTimer) {
    decreaseCounter();
    timer = currentTimer + INTERVAL;
  }

  // prevTimer = currentTimer;

  if (counter > 0) {
    requestAnimationFrame(rePaint);
  } else {
    timerEl.textContent = 0;
    document.querySelector(".btn").removeAttribute("disabled");
  }
}

/*
0ms --- 16ms --- 32ms ... 1xxxms
currentTimer              currentTimer = 0 + 1000
*/

requestAnimationFrame(rePaint);

function handleClick() {
  if (counter === 0) {
    alert("Hello World");
  } else {
    alert(`Thử lại sau ${counter} giây`);
  }
}
