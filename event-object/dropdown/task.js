let list = document.getElementsByClassName("dropdown__list");
let button = document.getElementsByClassName("dropdown__value");
let childList = Array.from(document.getElementsByClassName("dropdown__item"));

for (let i = 0; i < list.length; i++) {
  function onClick() {
    list[i].classList.toggle("dropdown__list_active");
    event.preventDefault();
  }
  button[i].addEventListener("click", onClick);
}

for (let n = 0; n < childList.length; n++) {
  function onClickItem() {
    childList[n]
      .closest(".dropdown__list")
      .classList.remove("dropdown__list_active");
    let textButton = childList[n].textContent;
    let textHeadButton = (childList[n]
      .closest(".dropdown")
      .querySelector(".dropdown__value").textContent = textButton);
    event.preventDefault();
  }
  childList[n].addEventListener("click", onClickItem);
}

