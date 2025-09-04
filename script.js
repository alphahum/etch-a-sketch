const grid = document.querySelector(".grid");
const newGrid = document.querySelector("#size");

function createGrid(size) {
    grid.innerHTML = "";
    grid.style.setProperty('--size' , size);

    for (let i = 0; i < size * size; i++ ) {
        const cell = document.createElement("div");

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
        });
        grid.appendChild(cell);
    }
}

createGrid(16)

newGrid.addEventListener("click", () => {
    let size = prompt("Enter Grid Size (max 100x100)")
    size = parseInt(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100");
    }
});