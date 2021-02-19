const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 2000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`; // round up the current number + increment
      setTimeout(updateCounter, 1); // increments every 1ms
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
