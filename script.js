const grid = document.querySelector(".grid");
for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div");
    grid.appendChild(cell);
}