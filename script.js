document.addEventListener('DOMContentLoaded', function() {
    const staticText = "I'm Brigitte Estolatan"; // Static text
    const typewriterText = "An Information Technology Graduate"; // Typewriter text
    const staticElement = document.getElementById('static-text');
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    // Display the static text immediately
    staticElement.innerHTML = staticText;

    function typeEffect() {
        if (index < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText[index];
            index++;
            setTimeout(typeEffect, 70); // Continue typing
        } else {
            // Pause before clearing and restarting the animation
            setTimeout(() => {
                typewriterElement.innerHTML = ""; // Clear the typewriter text
                index = 0; // Reset the index
                typeEffect(); // Restart the typewriter effect
            }, 1300); // Pause for 1.5 seconds before restarting
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


// Project images
const projectImages = {
  "VitalSkin": [
    "assets/VitalSkin/VitalSkin1.png",
    "assets/VitalSkin/VitalSkin2.png",
    "assets/VitalSkin/VitalSkin3.png",
    "assets/VitalSkin/VitalSkin4.png",
    "assets/VitalSkin/VitalSkin5.png",
    "assets/VitalSkin/VitalSkin6.png",
    "assets/VitalSkin/VitalSkin7.png",
    "assets/VitalSkin/VitalSkin8.png",
    "assets/VitalSkin/VitalSkin9.png",
    "assets/VitalSkin/VitalSkin10.png"
    ],

    "GrillBox": [
    "assets/GrillBox/GrillBox1.png",
    "assets/GrillBox/GrillBox2.png",
    "assets/GrillBox/GrillBox3.png",
    "assets/GrillBox/GrillBox4.png",
    "assets/GrillBox/GrillBox5.png",
    "assets/GrillBox/GrillBox6.png",
    "assets/GrillBox/GrillBox7.png",
    "assets/GrillBox/GrillBox8.png",
    "assets/GrillBox/GrillBox9.png"
    ]
};

let currentIndex = {};

// Open modal
function openModal(project) {
  currentIndex[project] = 0;
  document.getElementById("modal-" + project).style.display = "flex";
  updateImage(project);
}

// Close modal
function closeModal(project) {
  document.getElementById("modal-" + project).style.display = "none";
}

// Next
function nextImage(project) {
  currentIndex[project] = (currentIndex[project] + 1) % projectImages[project].length;
  updateImage(project);
}

// Prev
function prevImage(project) {
  currentIndex[project] =
    (currentIndex[project] - 1 + projectImages[project].length) % projectImages[project].length;
  updateImage(project);
}

// Update modal image
function updateImage(project) {
  document.getElementById(project + "-img").src = projectImages[project][currentIndex[project]];
}



