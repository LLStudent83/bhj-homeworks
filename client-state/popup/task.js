let modal = document.getElementById("subscribe-modal");
let modalClose = document.querySelector(".modal__close");

if (!document.cookie.match(/modalClose=close/g)) {
  modal.classList.add("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalClose=close";
});
