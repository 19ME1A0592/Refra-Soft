/* script.js */

// Function to calculate GST Invoice
function calculateGST() {
    let amount = document.getElementById('amount').value;
    let gst = document.getElementById('gst').value;
    
    // Validate input fields
    if(amount === '' || gst === '') {
        alert('Please enter both values');
        return;
    }
    
    let gstAmount = (amount * gst) / 100;
    let total = parseFloat(amount) + parseFloat(gstAmount);
    
    // Display calculated GST and total amount
    document.getElementById('output').innerHTML = `
        GST Amount: ₹${gstAmount.toFixed(2)}<br>
        Total Amount: ₹${total.toFixed(2)}`;
}

// Function to handle file upload
function uploadFile() {
    let fileInput = document.getElementById('fileUpload');
    let file = fileInput.files[0];
    
    // Check if a file is selected
    if (!file) {
        alert('Please select a file to upload');
        return;
    }
    
    // Display uploaded file name
    document.getElementById('fileOutput').innerHTML = `File Uploaded: ${file.name}`;
}
