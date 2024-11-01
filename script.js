function triggerConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = ''; // Clear previous confetti

  // Create 100 pieces of confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random size
    const size = Math.random() * 10 + 5; // Between 5px and 15px
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;

    // Random position
    confetti.style.left = `${Math.random() * 100}vw`; // Across the screen width
    confetti.style.top = `${Math.random() * -50}px`;  // Start slightly above screen

    // Random color
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Append confetti to container
    confettiContainer.appendChild(confetti);
  }
}
