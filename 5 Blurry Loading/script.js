const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

// runs blurring function every 30 seconds
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  // Increase the number percentage as time goes by
  loadText.innerText = `${load}%`;
  // Fades the number percentage as time goes by
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // Unblurs the image as time goes by
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Math Function to map a range of numbers to another range of nubmers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
