const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector("#size");
const resetBtn = document.querySelector("#reset");
const randomColorBtn = document.querySelector("#random-color");
const blackBtn = document.querySelector("#black");
let currentMode = "black";

function colorCell(cell) {
    if (currentMode === "black") {
        if (!cell.darkness) cell.darkness = 0;
        const lightness = 70 - (cell.darkness * 20);
        cell.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
        if (cell.darkness < 6) cell.darkness++;
        

    }
    else if (currentMode === "random") {
    if (!cell.baseHue) {
        cell.baseHue = Math.floor(Math.random() * 360);
        cell.darkness = 0;
    }
    const lightness = 100 - (cell.darkness * 10);
    cell.style.backgroundColor = `hsl(${cell.baseHue}, 80%, ${lightness}%)`;
    if (cell.darkness < 6) cell.darkness++;
}

}

function createGrid(size) {
    grid.innerHTML = "";
    grid.style.setProperty('--size' , size);

    for (let i = 0; i < size * size; i++ ) {
        const cell = document.createElement("div");

        cell.addEventListener("mouseover", () => {
            colorCell(cell);
        });
        grid.appendChild(cell);
    }
}



createGrid(16)

randomColorBtn.addEventListener("click", () => {
    currentMode = "random"
    
})

blackBtn.addEventListener("click", () => {
    currentMode = "black"
})


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