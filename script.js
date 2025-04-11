// Initialize elements
const valentines = document.querySelector('.valentines');
const card = document.querySelector('.card');
const giftButton = document.getElementById('giftButton');
let isOpen = false;

// Envelope click handler
valentines.addEventListener('click', function() {
  isOpen = !isOpen;
  
  if (isOpen) {
    // Open animation
    valentines.classList.add('open');
    card.classList.add('open');
    giftButton.disabled = false;
    giftButton.classList.add('enabled');
  } else {
    // Close animation
    valentines.classList.remove('open');
    card.classList.remove('open');
    giftButton.disabled = true;
    giftButton.classList.remove('enabled');
  }
});

// Gift button click handler - redirect to flowers page
giftButton.addEventListener('click', function() {
  if (!this.disabled) {
    window.location.href = "Flower.html";
  }
});