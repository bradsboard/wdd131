//date modifyer
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

// Insert the current year using date
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date in native format veryyyy important
lastModSpan.textContent = document.lastModified;

//  array
const products = [
    { name: "SuperVac 3000" },
    { name: "EcoWasher" },
    { name: "PowerDrill Pro" }
];

// Populate the select dropdown
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});