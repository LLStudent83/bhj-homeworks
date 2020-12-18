let elemText = document.getElementById("editor");
let text;

elemText.addEventListener("input", (event) => {
  text = elemText.value;
  localStorage.setItem("text", elemText.value);
});

document.addEventListener("DOMContentLoaded", () => {
  elemText.value = localStorage.getItem("text");
});
