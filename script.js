document.addEventListener("DOMContentLoaded", function () {
    // Moving logo effect (extra movement on hover)
    const logo = document.getElementById("moving-logo");
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "translateX(50px)";
    });
    logo.addEventListener("mouseout", () => {
        logo.style.transform = "translateX(0)";
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
});
