let button = document.querySelector(".btn");
let body = document.querySelector("body");
let hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let value = document.querySelector(".hex-text");

button.addEventListener("click", changeColor);

function changeColor() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
    }

    value.textContent = hex;
    body.style.backgroundColor = hex;
}