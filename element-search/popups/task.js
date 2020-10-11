const elModMain = document.getElementById("modal_main");
const elModSucc = document.getElementById("modal_success");
elModMain.classList.add("modal_active");
const button = document.querySelector("a.modal__close");

button.onclick = function () {
  elModMain.classList.remove("modal_active");
  elModSucc.classList.add("modal_active");
};
const elemClose = document.getElementsByClassName("modal__close_times")[1];
elemClose.onclick = function () {
    elModSucc.classList.remove("modal_active");
};

