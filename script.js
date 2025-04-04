// document.addEventListener("DOMContentLoaded", function () {
//     // Moving logo effect (extra movement on hover)
//     const logo = document.getElementById("moving-logo");
//     logo.addEventListener("mouseover", () => {
//         logo.style.transform = "translateX(50px)";
//     });
//     logo.addEventListener("mouseout", () => {
//         logo.style.transform = "translateX(0)";
//     });

//     // File Upload and Display for Download
//     const uploadFile = document.getElementById("uploadFile");
//     const uploadBtn = document.getElementById("uploadBtn");
//     const fileList = document.getElementById("fileList");

//     uploadBtn.addEventListener("click", () => {
//         if (uploadFile.files.length > 0) {
//             const file = uploadFile.files[0];
//             const fileLink = document.createElement("a");
//             fileLink.href = URL.createObjectURL(file);
//             fileLink.download = file.name;
//             fileLink.textContent = `Download ${file.name}`;
//             fileList.appendChild(fileLink);
//             fileList.appendChild(document.createElement("br"));
//         } else {
//             alert("Please select a file to upload.");
//         }
//     });
// });

async function fetchGoogleImages(query) {
    const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your Google API Key
    const searchEngineId = "YOUR_CSE_ID"; // Replace with your Google Custom Search Engine ID
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${searchEngineId}&searchType=image&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items) {
            document.getElementById("imageContainer").innerHTML = 
                `<img src="${data.items[0].link}" alt="Google Image">`;
        }
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

fetchGoogleImages("Accounting Software");

