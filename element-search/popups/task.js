const elModMain = document.getElementById("modal_main");
const elModSucc = document.getElementById("modal_success");
elModMain.classList.add("modal_active");

const buttonClose = document.getElementsByClassName("modal__close");
for (let i = 0; i < buttonClose.length; i++) {
  buttonClose[i].onclick = function () {
    if (buttonClose[i].classList.contains("show-success")) {
      elModMain.classList.remove("modal_active");
      elModSucc.classList.add("modal_active");
    } else {
      elModMain.classList.remove("modal_active");
      elModSucc.classList.remove("modal_active");
    };
  };
};
