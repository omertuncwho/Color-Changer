const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
function changeBackgroundColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("color-display").textContent = "Background Color: " + color;
}
document.getElementById("color-button").addEventListener("click", changeBackgroundColor);