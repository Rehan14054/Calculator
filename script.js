// Select the input field
let inputField = document.querySelector("#num");

// Select all buttons
let buttons = document.querySelectorAll(".my-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "DEL") {
      inputField.value = inputField.value.slice(0, -1);
    } else if (value === "RESET") {
      inputField.value = "";
    } else if (value === "=") {
      let expression = inputField.value.replace(/x/g, "*");

      try {
        inputField.value = eval(expression);
      } catch {
        inputField.value = "Error";
      }
    } else {
      inputField.value += value;
    }
  });
});
