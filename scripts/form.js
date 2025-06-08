//date modifyer
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

// Insert the current year using date
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date in native format veryyyy important
lastModSpan.textContent = document.lastModified;

//  array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
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