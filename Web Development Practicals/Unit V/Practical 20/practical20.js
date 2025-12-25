// --- Logic 1: Typing Effect ---
const roles = ["Developer", "C Programmer", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typingTextElement = document.getElementById("typing-text");
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingTextElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typingTextElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed + 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(roles.length) setTimeout(type, delayBetweenRoles);
});

function submitFeedback() {
   
    const feedbackBox = document.getElementById("userFeedback");
    const message = document.getElementById("successMessage");

    if (feedbackBox.value.trim() === "") {
        alert("Bhai kuch likho toh sahi pehle! 😅");
        return;
    }

    message.style.display = "block";
 
    feedbackBox.value = "";

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}