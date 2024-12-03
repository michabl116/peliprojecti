'use strict';
const quitButton = document.getElementById('quit_button');

// Check that the button exists
if (quitButton) {
  quitButton.addEventListener('click', () => {
    // Create an overlay container
    const overlay = document.createElement('div');
    overlay.id = 'game-over-overlay';

    // Overlay styles to cover the screen
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent black background
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000'; // Make sure it is on top of other elements

    // Create the "Game Over" message
    const message = document.createElement('h1');
    message.textContent = 'GAME OVER';
    message.style.color = 'white';
    message.style.fontSize = '5rem';
    message.style.textAlign = 'center';
    message.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';

    // Add the message to the overlay
    overlay.appendChild(message);

    // Add the overlay to the body of the document
    document.body.appendChild(overlay);

    // Option: Remove the overlay after a few seconds
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 3000);
  });
} else {
  console.error('The "Quit" button was not found in the DOM.');
}
