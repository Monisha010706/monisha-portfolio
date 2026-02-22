const roles = [
    "Computer Science Student",
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Web Designer"
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);