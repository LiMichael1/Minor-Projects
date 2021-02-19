const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4; //trigger point

  boxes.forEach((box) => {
    // get box top position in the viewport
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      // shows box if the boxTop position in viewPort is less than the bottom position of the view port
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
