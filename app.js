// Prevent a ghost image from appearing when dragging on canvas
document.addEventListener("dragstart", (e) => e.preventDefault());

// Select sketchboard canvas div
const container = document.querySelector("#sketchboard__canvas");

// Select eraser checkbox
const eraserCheckbox = document.querySelector("#eraser");

// Create a 16 x 16 grid of divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-element");
  container.appendChild(div);
}

// Add event listener to color picker to change selected color
const colorPicker = document.querySelector("#color-picker");
let selectedColor = colorPicker.value; // set initial value
colorPicker.addEventListener("change", (event) => {
  selectedColor = event.target.value;
});

// Add event listener to each div to change background color on click and hold or single click
const gridElements = document.querySelectorAll(".grid-element");
gridElements.forEach((gridElement) => {
  // Change background on mousedown
  gridElement.addEventListener("mousedown", (e) => {
    // If eraser is checked, change background to white
    if (eraserCheckbox.checked) {
      gridElement.style.backgroundColor = "white";
    }
    // Else change background to black
    else {
      gridElement.style.backgroundColor = selectedColor;
    }
  });

  // Change background on mouseover if mouse is held down
  gridElement.addEventListener("mouseover", (e) => {
    // If eraser is checked, change background to white
    if (e.buttons === 1) {
      if (eraserCheckbox.checked) {
        gridElement.style.backgroundColor = "white";
      }
      // Else change background to black
      else {
        gridElement.style.backgroundColor = selectedColor;
      }
    }
  });
  // Change background on click
  gridElement.addEventListener("click", () => {
    // If eraser is checked, change background to white
    if (eraserCheckbox.checked) {
      gridElement.style.backgroundColor = "white";
    }
    // Else change background to black
    else {
      gridElement.style.backgroundColor = selectedColor;
    }
  });
});

// Clear canvas when button is clicked
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  gridElements.forEach((gridElement) => {
    gridElement.style.backgroundColor = "white";
  });
});
