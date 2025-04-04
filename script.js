function calculateGST() {
    let amount = document.getElementById("amount").value;
    let gstRate = document.getElementById("gst-rate").value;
    
    if (amount === "" || gstRate === "") {
        alert("Please enter both amount and GST rate.");
        return;
    }
    
    let gstAmount = (amount * gstRate) / 100;
    let totalAmount = parseFloat(amount) + gstAmount;
    
    document.getElementById("gst-output").innerHTML = `GST: ₹${gstAmount.toFixed(2)} | Total: ₹${totalAmount.toFixed(2)}`;
}

document.getElementById("upload-btn").addEventListener("click", function() {
    let fileInput = document.getElementById("file-input");
    if (fileInput.files.length === 0) {
        alert("Please select a file to upload.");
    } else {
        document.getElementById("upload-status").innerHTML = "File uploaded successfully!";
    }
});
