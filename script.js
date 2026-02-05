// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const card = document.getElementById('card');
const success = document.getElementById('success');

// Track button sizes
let yesBtnScale = 1;
let noBtnScale = 1;
let noMoveCount = 0;

// When "Yes" is clicked, show success screen
yesBtn.addEventListener('click', () => {
    card.classList.add('hidden');
    success.classList.remove('hidden');
});

// Make "No" button run away from mouse
noBtn.addEventListener('mouseover', () => {
    moveNoButton();
});

noBtn.addEventListener('click', () => {
    moveNoButton();
});

// Track mouse movement near the No button
document.addEventListener('mousemove', (e) => {
    const rect = noBtn.getBoundingClientRect();
    const noBtnCenterX = rect.left + rect.width / 2;
    const noBtnCenterY = rect.top + rect.height / 2;

    // Calculate distance from mouse to No button
    const distance = Math.sqrt(
        Math.pow(e.clientX - noBtnCenterX, 2) +
        Math.pow(e.clientY - noBtnCenterY, 2)
    );

    // If mouse is getting close to No button (within 150px)
    if (distance < 150) {
        // Move the No button away
        moveNoButton();
    }
});

function moveNoButton() {
    // Increment move counter
    noMoveCount++;

    // Switch to fixed positioning so it can move anywhere on screen
    noBtn.style.position = 'fixed';

    // Use full viewport for button movement
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Generate random position anywhere on screen (with some padding from edges)
    const padding = 20;
    const randomX = Math.random() * (viewportWidth - btnWidth - padding * 2) + padding;
    const randomY = Math.random() * (viewportHeight - btnHeight - padding * 2) + padding;

    // Apply the new position using fixed positioning
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Make the No button smaller as it runs away
    noBtnScale = Math.max(0.3, noBtnScale - 0.05);
    noBtn.style.transform = `scale(${noBtnScale})`;

    // Make the Yes button bigger each time No moves
    yesBtnScale = 1 + (noMoveCount * 0.15); // Grows by 15% each time
    yesBtn.style.transform = `scale(${yesBtnScale})`;
}
