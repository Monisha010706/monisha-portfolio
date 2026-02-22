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

function openModal(project) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");

    if (project === "hunger") {
        title.innerText = "AI Hunger Heatmap";
        description.innerText =
            "An AI-driven hunger prediction system that identifies high-risk zones using machine learning. Integrated Google Maps heatmap visualization and QR-enabled blockchain verification for transparent and secure food distribution tracking.";
    }

    if (project === "course") {
        title.innerText = "Course Landing Webpage";
        description.innerText =
            "A fully responsive landing page built using HTML, CSS, and JavaScript. Includes hero section, feature highlights, pricing plans, testimonials, smooth scrolling navigation, and optimized mobile-first design.";
    }

    if (project === "healthcare") {
        title.innerText = "Healthcare Web App";
        description.innerText =
            "Developed during internship using PHP, AJAX, JavaScript, and SQL Server. The system manages patient records, appointment scheduling, and medical data processing with dynamic database connectivity.";
    }

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}