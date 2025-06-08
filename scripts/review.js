// Get the current count from localStorage, or start at 0 if not set
let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

// Store the updated count back into localStorage
localStorage.setItem("reviewCount", reviewCount);

// Show the count on the page
document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        countDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    }
});


//date modifyer
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

// Insert the current year using date
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date in native format veryyyy important
lastModSpan.textContent = document.lastModified;