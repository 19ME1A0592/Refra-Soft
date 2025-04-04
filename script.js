document.addEventListener("DOMContentLoaded", function () {
    // Moving logo hover effect
    const logo = document.getElementById("moving-logo");
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.2)";
    });
    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });

    // File Upload and Display for Download
    const uploadFile = document.getElementById("uploadFile");
    const uploadBtn = document.getElementById("uploadBtn");
    const fileList = document.getElementById("fileList");

    uploadBtn.addEventListener("click", () => {
        if (uploadFile.files.length > 0) {
            const file = uploadFile.files[0];
            const fileLink = document.createElement("a");
            fileLink.href = URL.createObjectURL(file);
            fileLink.download = file.name;
            fileLink.textContent = `Download ${file.name}`;
            fileList.appendChild(fileLink);
            fileList.appendChild(document.createElement("br"));
        } else {
            alert("Please select a file to upload.");
        }
    });

    // Fetch Random Images for Gallery
    async function fetchImages() {
        const query = "technology"; // Change the keyword for different images
        const url = `https://source.unsplash.com/250x150/?${query}`;
        for (let i = 0; i < 4; i++) {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Gallery Image";
            document.getElementById("imageContainer").appendChild(img);
        }
    }
    fetchImages();
});
