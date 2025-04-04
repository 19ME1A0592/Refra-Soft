// Array of image URLs (replace these with actual image URLs)
const imageUrls = [
    'https://images.unsplash.com/photo-1516728778615-2d59f0e4b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGFjY291bnRpbmd8ZW58MHx8fHwxNjYyMjY0NzY0&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb21wdXRlcnxlbnwwfHx8fDE2NjIyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb21wdXRlcnxlbnwwfHx8fDE2NjIyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1514516872020-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb21wdXRlcnxlbnwwfHx8fDE2NjIyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1514516872020-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb21wdXRlcnxlbnwwfHx8fDE2NjIyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1514516872020-1c1c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb21wdXRlcnxlbnwwfHx8fDE2NjIyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=400'
];

const imageContainer = document.getElementById('image-container');
const loadMoreButton = document.getElementById('load-more');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementsByClassName('close')[0];

let currentImageIndex = 0;
const imagesToLoad = 3; // Number of images to load each time

// Function to load images
function loadImages() {
    for (let i = 0; i < imagesToLoad; i++) {
        if (currentImageIndex < imageUrls.length) {
            const img = document.createElement('img');
            img.src = imageUrls[currentImageIndex];
            img.alt = 'Image';
            img.classList.add('dynamic-image');
            img.onclick = () => openModal(img.src); // Open modal on click
            imageContainer.appendChild(img);
            currentImageIndex++;
        }
    }
}

// Function to open modal
function openModal(src) {
    modal.style.display = "block";
    modalImage.src = src;
    captionText.innerHTML = "Image Preview"; // You can customize this
}

// Function to close modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Load initial images
loadImages();

// Load more images on button click
loadMoreButton.onclick = loadImages;

// Smooth scrolling for navigation links
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
