//date modifyer
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

// Insert the current year using date
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date in native format veryyyy important
lastModSpan.textContent = document.lastModified;


//hidden nav
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    // Toggle visibility of the menu
    navMenu.classList.toggle("show");

    // Swap hamburger icon with close icon
    if (navMenu.classList.contains("show")) {
        hamburger.innerHTML = "&times;"; // ✖ Close
    } else {
        hamburger.innerHTML = "&#9776;"; // ☰ Hamburger
    }
});