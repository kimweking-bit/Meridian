// Suite selection
const suiteCards = document.querySelectorAll('.suite-card');
let selectedSuite = null;

suiteCards.forEach(card => {
  card.addEventListener('click', () => {
    suiteCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedSuite = card.dataset.suite;
  });
});

// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  if(!selectedSuite) { alert('Please select a suite.'); return; }
  alert('Booking submitted for ' + selectedSuite);
});

// Payment form submission
document.getElementById('paymentForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Payment submitted for ' + (selectedSuite || 'selected suite'));
});
