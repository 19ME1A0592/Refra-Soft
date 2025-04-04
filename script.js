// Moving logo effect
let logo = document.getElementById("moving-logo");
let direction = 1;
setInterval(() => {
    let currentSize = parseFloat(window.getComputedStyle(logo).fontSize);
    if (currentSize >= 60) direction = -1;
    if (currentSize <= 30) direction = 1;
    logo.style.fontSize = (currentSize + direction * 2) + "px";
}, 200);

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
// Function to start scrolling text
function startScrollingText(elementId) {
    let container = document.getElementById(elementId);
    let textElement = document.createElement("div");
    textElement.classList.add("scrolling-text");
    textElement.innerHTML = container.innerHTML;
    container.innerHTML = "";
    container.appendChild(textElement);
}

// Start scrolling for Vision & Mission
window.onload = function () {
    startScrollingText("vision");
    startScrollingText("mission");
};

// Show an alert when the Demo file is clicked
document.querySelector(".download-btn").addEventListener("click", function () {
    alert("Your demo file is downloading...");
});

// Highlight active section on scroll
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        let id = section.getAttribute("id");
        let navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (navLink) {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.style.color = "lightblue";
            } else {
                navLink.style.color = "#ffdd57";
            }
        }
    });
});
