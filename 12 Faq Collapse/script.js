// Bring in toggle button via querySelectorAll
// Loop through nodeList via ForEach
// Add click event via addEventListener
// Toggle active class on the parent node

const faqs = document.querySelectorAll('.faq');

const faq_toggles = document.querySelectorAll('.faq-toggle');

faq_toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    clearActive();
    toggle.parentNode.classList.toggle('active');
  });
});

function clearActive() {
  faqs.forEach((faq) => {
    faq.classList.remove('active');
  });
}
