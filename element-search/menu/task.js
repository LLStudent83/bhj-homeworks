const htmlcMenuLink = document.getElementsByClassName("menu__link");
for (let i = 0; i < htmlcMenuLink.length; i++) {
  htmlcMenuLink[i].onclick = function () {
    if (!htmlcMenuLink[i].closest("li").querySelector(".menu_active")
    ) {
      let x = document.querySelector(".menu_active");
      if (x) {
        x.classList.remove("menu_active");
      }
        }
    if (htmlcMenuLink[i].closest("li").querySelector("ul.menu_sub")) {
      let classLinkMenu = htmlcMenuLink[i]
        .closest("li")
        .querySelector(".menu_sub");
      classLinkMenu.classList.toggle("menu_active");
      return false;
    }
  };
}
