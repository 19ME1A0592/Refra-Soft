document.addEventListener("DOMContentLoaded", function () {
    // Moving Logo Hover Effect
    const logo = document.getElementById("moving-logo");
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.2)";
    });
    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });

    // Image Fade-in Effect
    const images = document.querySelectorAll(".image-gallery img");
    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1.5s ease-in-out";
    });

    // Fade in images on load
    window.addEventListener("load", () => {
        images.forEach(img => {
            img.style.opacity = "1";
        });
    });

    // Smooth Scroll to Sections
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
