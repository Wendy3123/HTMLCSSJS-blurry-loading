const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// this 30 is in milliseconds
let int = setInterval(blurring, 30);
const scale = (num, one, two) => {
  return (num * one) / two;
};

const unblur = (startingBlur, num) => {
  return startingBlur - num;
};

function blurring() {
  load++;
  //   if load is greater than 99 it will stop/clear the interval so at 100 it will stop
  if (load > 99) {
    clearInterval(int);
  }
  //   innerText returns all text contained by an element and all its child elements.
  loadText.innerText = `${load}%`;
  //this style opacity for the load percentage text in middle of screen will start at 1 then count down and the number will slowly disappear as it counts down to 0 opacity
  loadText.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${unblur(100, load)}px)`;
}
