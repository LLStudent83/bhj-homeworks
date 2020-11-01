let tabsArr = document.getElementsByClassName("tab");
let tabsContentArr = document.getElementsByClassName("tab__content");

for (let i = 0; i < tabsArr.length; i++) {
  tabsArr[i].addEventListener("click", () => {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document
      .querySelector(".tab__content_active")
      .classList.remove("tab__content_active");
    tabsArr[i].classList.add("tab_active");
    tabsContentArr[i].classList.add("tab__content_active");
  });
}
