let elementsBookControl = document.getElementsByClassName("font-size");

for (let i = 0; i < elementsBookControl.length; i++) {
  elementsBookControl[i].addEventListener("click", () => {
    document
      .querySelector(".font-size_active")
      .classList.remove("font-size_active");
    elementsBookControl[i].classList.add("font-size_active");
    let sizeText = elementsBookControl[i].dataset.size;
    document.getElementById("book").className = "book";
    if (sizeText === "small") {
      document.getElementById("book").classList.add("book_fs-small");
    }
    if (sizeText === "big") {
      document.getElementById("book").classList.add("book_fs-big");
    }
    event.preventDefault();
  });
}
