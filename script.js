function calculateGST() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    if (fileInput.files.length === 0) {
        output.innerHTML = "Please upload a file.";
        return;
    }

    // Here you would typically read the file and perform calculations.
    // For demonstration, let's assume a fixed GST calculation.
    const gstRate = 0.18; // 18% GST
    const invoiceAmount = 
