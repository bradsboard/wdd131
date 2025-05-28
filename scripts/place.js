//date modifyer
const yearSpan = document.getElementById("currentyear");
const lastModSpan = document.getElementById("lastModified");

// Insert the current year using date
yearSpan.textContent = new Date().getFullYear();

// Insert last modified date in native format veryyyy important
lastModSpan.textContent = document.lastModified;


// Weather Info

//seting the variables
const temperature = "24°C";
const condition = "Partly Sunny";
const wind = "11km/h"

//set string to numeric
const tempValue = parseFloat(temperature);
const windSpeed = parseFloat(wind);

//function to get wind chill
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const chill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
        return chill.toFixed(1) + "°C";
    } else {
        return "N/A"
    }
}



//Updating HTML using element id
document.getElementById("temp").textContent = temperature;
document.getElementById("condition").textContent = condition;
document.getElementById("wind").textContent = wind;

const windChill = calculateWindChill(tempValue, windSpeed);
document.getElementById("chill").textContent = windChill;
