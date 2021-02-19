const labels = document.querySelectorAll('.form-control label');

// creates a span for each label
labels.forEach((label) => {
  // split each letter
  // use map to create a span for each letter
  // join the array together to form the innerHTML/innerText
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) => `<span 
    style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join(``);
});
