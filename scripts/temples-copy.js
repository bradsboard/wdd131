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


const container = document.getElementById("temple-cards");

// array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Edmonton Alberta Canada",
        location: "Edmonton Alberta Canada",
        dedicated: "1999, December, 11",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155.jpg"
    },
    {
        templeName: "Calgary Alberta Canada",
        location: "Calgary Alberta Canada",
        dedicated: "2012, October, 28",
        area:33000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-3888-thumb.jpg"
    },
    {
        templeName: "Cardston Alberta Canada",
        location: "Cardston Alberta Canada",
        dedicated: "1923, August, 29",
        area: 88562,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-50783-thumb.jpg"
    }
];
  
// === Render Function ===
function displayTemples(templeList) {
    container.innerHTML = ""; // Clear current content

    templeList.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// === Initial Display ===
displayTemples(temples);

// === Utility: Extract Year ===
function getYear(dateStr) {
    return parseInt(dateStr.split(",")[0]);
}

// === Filter Event Listeners ===
document.getElementById("filter-home").addEventListener("click", () => {
    displayTemples(temples);
});

document.getElementById("filter-old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("filter-new").addEventListener("click", () => {
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    displayTemples(newTemples);
});

document.getElementById("filter-large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("filter-small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});