const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("September 6 2025 17:30:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (difference < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }

}

setInterval(timer, 1000);
timer();

// Green color changer
const colorButton = document.getElementById("colorButton");
const greenSection = document.getElementById("greenSection");

// Array of different green shades
const greenShades = [
    "#228B22", // Forest Green
    "#32CD32", // Lime Green
    "#006400", // Dark Green
    "#90EE90", // Light Green
    "#00FF00", // Bright Green
    "#8FBC8F", // Dark Sea Green
    "#98FB98", // Pale Green
    "#00FF7F", // Spring Green
    "#7CFC00", // Lawn Green
    "#9ACD32"  // Yellow Green
];

// Function to change background color
function changeGreenColor() {
    // Get random index from greenShades array
    const randomIndex = Math.floor(Math.random() * greenShades.length);
    
    // Change background color
    greenSection.style.backgroundColor = greenShades[randomIndex];
}

// Add event listener to button
colorButton.addEventListener('click', changeGreenColor);