$(document).ready(function() {
    for (let i = 0; i < 100; i++) {
      createConfetti();
    }

    function createConfetti() {
      const confetti = $('<div class="confetti"></div>');
      $('#celebration-container').append(confetti);

      const positionX = Math.random() * window.innerWidth;
      const positionY = Math.random() * window.innerHeight;

      confetti.css({
        left: positionX + 'px',
        top: positionY + 'px',
        animationDuration: (Math.random() * 3 + 1) + 's',
      });
    }
  });