let elementsRotator = Array.from(
  document.getElementsByClassName("rotator__case")
);

assignСlass();

function assignСlass() {
  let elemEct = elementsRotator.find((element) =>
    element.classList.contains("rotator__case_active")
  );
  let indElemEct = elementsRotator.findIndex((element) => element === elemEct);
  elemEct.classList.remove("rotator__case_active");
  let indexNext = indElemEct + 1;
  if (indexNext > elementsRotator.length - 1) {
    indexNext = 0;
  }
  elementsRotator[indexNext].classList.add("rotator__case_active");
  let colorEl = elementsRotator[indexNext].dataset.color;
  elementsRotator[indexNext].setAttribute("style", `"color:" + colorEl`);
  let time = elementsRotator[indexNext].dataset.speed;
  timeout(time);
}

function timeout(time) {
  setTimeout(assignСlass, time);
}
