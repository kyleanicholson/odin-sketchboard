// Select sketchboard canvas div
const container = document.querySelector("#sketchboard__canvas");

// Create a 16 x 16 grid of divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-element");
  container.appendChild(div);
}

// Prevent a ghost image from appearing when dragging on canvas
document.addEventListener("dragstart", (e) => e.preventDefault());

// Add event listener to each div to change background color on click and hold or single click
const gridElements = document.querySelectorAll(".grid-element");
gridElements.forEach((gridElement) => {
  // Change background on mousedown
  gridElement.addEventListener("mousedown", (e) => {
    gridElement.style.backgroundColor = "black";
  });

  // Change background on mouseover if mouse is held down
  gridElement.addEventListener("mouseover", (e) => {
    if (e.buttons === 1) {
      gridElement.style.backgroundColor = "black";
    }
  });
  // Change background on click
  gridElement.addEventListener("click", (e) => {
    gridElement.style.backgroundColor = "black";
  });
});

// Clear canvas when button is clicked
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  gridElements.forEach((gridElement) => {
    gridElement.style.backgroundColor = "white";
  });
});
