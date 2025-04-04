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

// GST Calculation Function
function calculateGST() {
    const amount = parseFloat(document.getElementById("amount").value);
    const gstRate = parseFloat(document.getElementById("gst-rate").value);
    
    if (isNaN(amount) || isNaN(gstRate)) {
        document.getElementById("gst-output").innerText = "❌ Please enter valid numbers.";
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    document.getElementById("gst-output").innerText = 
        `GST: ₹${gstAmount.toFixed(2)}, Total Amount: ₹${totalAmount.toFixed(2)}`;
}
