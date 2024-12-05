// scripts.js

// Function to update the current year and last modified date in the footer
function updateFooter() {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed, unit = 'metric') {
    if (unit === 'metric') {
        // Wind Chill formula for Celsius
        // WCI = 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
        return (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + '°C';
    } else if (unit === 'imperial') {
        // Wind Chill formula for Fahrenheit
        // WCI = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
        return (
            35.74 +
            0.6215 * temperature -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + '°F';
    } else {
        return 'N/A';
    }
}

// Function to display wind chill based on conditions
function displayWindChill() {
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    // Static values (placeholders)
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    // Determine unit based on location (Santiago uses metric)
    const unit = 'metric';

    let windChill = 'N/A';

    if (
        (unit === 'metric' && temperature <= 10 && windSpeed > 4.8) ||
        (unit === 'imperial' && temperature <= 50 && windSpeed > 3)
    ) {
        windChill = calculateWindChill(temperature, windSpeed, unit);
    }

    windChillElement.textContent = windChill;
}

// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    displayWindChill();
});
