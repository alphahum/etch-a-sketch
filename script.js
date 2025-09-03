const grid = document.querySelector(".grid");
const newgrid = document.querySelector("#size");

function createGrid(size) {
    grid.innerHTML = "";
    for (let i = 0; i < size * size; i++ ) {
        const cell = document.createElement("div");
        cell.style.flex = `1 0 calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        cell.style.boxSizing = "border-box";
        cell.style.border = "1px solid #ddd";

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
        });
        grid.appendChild(cell);
    }
}

createGrid(16)