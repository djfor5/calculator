// eslint-disable-next-line no-param-reassign
function displayValue(value, displayEl) { displayEl.textContent = value; }

function clearDisplay(displayEl) {
  displayEl.textContent = ""; // eslint-disable-line no-param-reassign
}

export {
  displayValue,
  clearDisplay,
};
