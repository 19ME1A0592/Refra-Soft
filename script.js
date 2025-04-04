/* JavaScript for Dynamic Effects */
document.addEventListener("DOMContentLoaded", function() {
    // Moving Logo Animation
    let logo = document.getElementById("moving-logo");
    let direction = 1;
    setInterval(() => {
        let leftPos = parseInt(getComputedStyle(logo).left) || 0;
        logo.style.transform = `translateX(${leftPos + 5 * direction}px)`;
        if (leftPos >= 20 || leftPos <= -20) direction *= -1;
    }, 500);

    // Scrolling Vision & Mission Text
    function startScrollingText(elementId) {
        let container = document.getElementById(elementId);
        let textElement = document.createElement("div");
        textElement.classList.add("scrolling-text");
        textElement.innerHTML = container.innerHTML;
        container.innerHTML = "";
        container.appendChild(textElement);
    }
    startScrollingText("vision");
    startScrollingText("mission");

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Image Hover Effect
    let images = document.querySelectorAll(".image-gallery img");
    images.forEach(img => {
        img.addEventListener("mouseover", () => img.style.transform = "scale(1.2)");
        img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
    });
});
