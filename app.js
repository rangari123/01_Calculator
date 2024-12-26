// caluculator

const display = document.getElementById("display");

// 3 function

// appendtodisplay , calculate , cleardisplay

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // do main calucltion of keys typed
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
