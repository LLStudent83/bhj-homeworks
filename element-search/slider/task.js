let arrImg = document.getElementsByClassName("slider__item");
let button = document.getElementsByClassName("slider__arrow");
let n = 0;

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    if (button[i].classList.contains("slider__arrow_prev")) {
      arrImg[n].classList.remove("slider__item_active");
      n = n - 1;
      n < 0 ? (n = arrImg.length - 1) : undefined;
      arrImg[n].classList.add("slider__item_active");
    };

    if (button[i].classList.contains("slider__arrow_next")) {
      arrImg[n].classList.remove("slider__item_active");
      n = n + 1;
      n > arrImg.length - 1 ? (n = 0) : undefined;
      arrImg[n].classList.add("slider__item_active");
    };
  };
};
