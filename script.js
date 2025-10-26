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
  ],
  
  "HealthQuest":[
    "assets/HealthQuest/1.png", 
    "assets/HealthQuest/2.png", 
    "assets/HealthQuest/3.png", 
    "assets/HealthQuest/4.png", 
    "assets/HealthQuest/5.png", 
    "assets/HealthQuest/6.png",
    "assets/HealthQuest/7.png", 
    "assets/HealthQuest/8.png", 
    "assets/HealthQuest/9.png", 
    "assets/HealthQuest/10.png", 
    "assets/HealthQuest/11.png", 
    "assets/HealthQuest/12.png", 
    "assets/HealthQuest/13.png", 
    "assets/HealthQuest/14.png", 
    "assets/HealthQuest/15.png", 
    "assets/HealthQuest/16.png", 
    "assets/HealthQuest/17.png",
  ],

  "Scantastic": [
    "assets/Scantastic/Scantastic1.png",
    "assets/Scantastic/Scantastic2.png",
    "assets/Scantastic/Scantastic3.png",
    "assets/Scantastic/Scantastic4.png",
    "assets/Scantastic/Scantastic5.png",
    "assets/Scantastic/Scantastic6.png",
    "assets/Scantastic/Scantastic7.png",
    "assets/Scantastic/Scantastic8.png",
    "assets/Scantastic/Scantastic9.png",
    "assets/Scantastic/Scantastic10.png",
    "assets/Scantastic/Scantastic11.png",
    "assets/Scantastic/Scantastic12.png",
    "assets/Scantastic/Scantastic13.png",
    "assets/Scantastic/Scantastic14.png",
    "assets/Scantastic/Scantastic15.png"
  ],

  "Kasama": [
    "assets/Kasama/Kasama1.png",
    "assets/Kasama/Kasama2.png",
    "assets/Kasama/Kasama3.png",
    "assets/Kasama/Kasama4.png",
    "assets/Kasama/Kasama5.png",
    "assets/Kasama/Kasama6.png",
    "assets/Kasama/Kasama7.png",
    "assets/Kasama/Kasama8.png",
    "assets/Kasama/Kasama9.png",
    "assets/Kasama/Kasama10.png",
    "assets/Kasama/Kasama11.png",
    "assets/Kasama/Kasama12.png",
    "assets/Kasama/Kasama13.png",
    "assets/Kasama/Kasama14.png",
    "assets/Kasama/Kasama15.png"
  ],

  "iSeeker":[
    "assets/iSeeker/iSeeker1.png",
    "assets/iSeeker/iSeeker2.png",
    "assets/iSeeker/iSeeker3.png",
    "assets/iSeeker/iSeeker4.png",
    "assets/iSeeker/iSeeker5.png",
    "assets/iSeeker/iSeeker6.png",
    "assets/iSeeker/iSeeker7.png",
    "assets/iSeeker/iSeeker8.png"
  ],

  "Dispatch":[
    "assets/Dispatch/Dispatch1.png",
    "assets/Dispatch/Dispatch2.png",
    "assets/Dispatch/Dispatch3.png",
    "assets/Dispatch/Dispatch4.png",
    "assets/Dispatch/Dispatch5.png"
  ],

  "CNT":[
    "assets/CNT/CNT1.png",
    "assets/CNT/CNT2.png",
    "assets/CNT/CNT3.png",
  ],
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



