const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const randomColorBtn = document.querySelector("#random-color");
const blackBtn = document.querySelector("#classic");
let currentMode = "black";

function createGrid(size) {
    grid.innerHTML = "";
    grid.style.setProperty('--size' , size);

    for (let i = 0; i < size * size; i++ ) {
        const cell = document.createElement("div");

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
            cell.darkness = 0
        });
        grid.appendChild(cell);
    }
}

createGrid(16)

resetBtn.addEventListener("click", () => {
    grid.innerHTML = "";
    createGrid(16);

})

newGridBtn.addEventListener("click", () => {
    let size = prompt("Enter Grid Size (max 100x100)")
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100");
    }
});