const passInput = document.getElementById("pass-input");
const display = document.getElementById("display");
const checkbox = document.getElementById("checkbox");
const passinput = document.getElementById("pass-input");
const button = document.getElementById("button");

console.log(passInput);

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    passInput.type = "text";
    display.innerHTML = "Hide";
  } else {
    display.innerHTML = "Show";
    passInput.type = "password";
  }
});

button.addEventListener("mousedown", () => {
  passInput.type = "text";
  button.value = "Hide";
});
button.addEventListener("mouseup", () => {
  passInput.type = "password";
  button.value = "Show";
});
