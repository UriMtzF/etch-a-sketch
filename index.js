const container = document.getElementById("container");
const sizeInput = document.getElementById("size");
const applySize = document.getElementById("apply");
const clearButton = document.getElementById("clear");
let gridSize = 16;

drawGrid(gridSize);
startDraw();

function drawGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = createDiv();
    for (let j = 0; j < size; j++) {
      row.appendChild(createBlock(container.clientWidth / size));
    }
    container.appendChild(row);
  }
}

function createDiv() {
  const div = document.createElement("div");
  div.className = "row";
  return div;
}

function createBlock(size) {
  const block = document.createElement("div");
  block.className = "block";
  let length = size - 2;
  block.style.width = `${length}px`;
  block.style.height = `${length}px`;

  return block;
}

function clearContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

applySize.addEventListener("click", () => {
  clearContainer();
  gridSize = Number.parseInt(sizeInput.value);
  drawGrid(gridSize);
  startDraw();
});

clearButton.addEventListener("click", () => {
  clearContainer();
  drawGrid(gridSize);
  startDraw();
});

function startDraw() {
  const blocks = document.querySelectorAll(".row .block");
  blocks.forEach((block) => {
    block.addEventListener("mouseenter", () => {
      let hasColor = block.style.backgroundColor !== "";
      if (!hasColor) {
        block.style.backgroundColor = randomColor();
      }
    });
  });
}

function randomColor() {
  let color = "#";
  let values = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }

  return color;
}
