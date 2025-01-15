// Set the launch date to March 30, 2025 (YYYY, MM-1, DD, HH, MM, SS)
const launchDate = new Date(2025, 2, 30, 12, 0, 0).getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "We're Live! 🎉";
  }
}, 1000);

// jQuery Animations
$(document).ready(function () {
  // Fade in the container
  $('.container').hide().fadeIn(1500);

  // Add hover effect to countdown numbers
  $('#countdown span').hover(
    function () {
      $(this).css('color', '#ffab91'); // Light orange on hover
    },
    function () {
      $(this).css('color', '#d7ccc8'); // Reset to original color
    }
  );
});