document.addEventListener('DOMContentLoaded', function() {
    const staticText = "I'm Brigitte Estolatan"; // Static text
    const typewriterText = "An Information Technology Student"; // Typewriter text
    const staticElement = document.getElementById('static-text');
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    // Display the static text immediately
    staticElement.innerHTML = staticText;

    function typeEffect() {
        if (index < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText[index];
            index++;
            setTimeout(typeEffect, 100); // Continue typing
        } else {
            // Pause before clearing and restarting the animation
            setTimeout(() => {
                typewriterElement.innerHTML = ""; // Clear the typewriter text
                index = 0; // Reset the index
                typeEffect(); // Restart the typewriter effect
            }, 1500); // Pause for 1.5 seconds before restarting
        }
    }

    typeEffect(); // Start the typewriter effect
});


let lastScrollY = window.scrollY; // Keep track of the last scroll position

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar'); // Select the navbar
    if (window.scrollY < lastScrollY) {
        // User is scrolling up
        navbar.classList.remove('hidden');
    } else {
        // User is scrolling down
        navbar.classList.add('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});

