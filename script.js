document.addEventListener("DOMContentLoaded", function () {
    const uploadSection = document.getElementById("upload");
    const uploadForm = document.getElementById("upload-form");
    const uploadStatus = document.getElementById("upload-status");

    // Simulate login (Only Owner can upload)
    const isOwner = confirm("Are you the owner? Click OK to manage files.");

    if (!isOwner) {
        uploadSection.style.display = "none";
    }

    // File Upload Simulation
    uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const fileInput = document.getElementById("file-input");
        if (fileInput.files.length > 0) {
            uploadStatus.innerText = "✅ File uploaded successfully!";
        } else {
            uploadStatus.innerText = "❌ Please select a file to upload.";
        }
    });
});
