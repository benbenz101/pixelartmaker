// Select color input
let pixelCanvas = document.getElementById("pixelCanvas");
let colorPicker = document.getElementById("colorPicker");

// Select size input
let sizePicker = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
  // Your code goes here!
  for (let y = 0; y < height; y++) {
    let row = pixelCanvas.insertRow(y);
    for (let x = 0; x < width; x++) {
      let cell = row.insertCell(x);
      cell.addEventListener("mousedown", function () {
        cell.style.backgroundColor = colorPicker.value;
        cell.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          cell.style.backgroundColor = "white";
        });
      });
    }
  }
}

//function that uses the size submit to call makeGrid()
sizePicker.addEventListener("submit", function (e) {
  e.preventDefault();
  while (pixelCanvas.hasChildNodes()) {
    pixelCanvas.removeChild(pixelCanvas.lastChild);
  }
  makeGrid(height.value, width.value);
});
