let tooltips = Array.from(document.getElementsByClassName("has-tooltip"));
let elementPrompt = document.createElement("div");

elementPrompt.classList.add("tooltip");
tooltips[0].insertAdjacentElement("afterend", elementPrompt);

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", () => {
    event.preventDefault();

    if (document.querySelector(".tooltip_active")) {
      if (
        tooltips[i].getAttribute("title") ===
        document.querySelector(".tooltip_active").textContent
      ) {
        document
          .querySelector(".tooltip_active")
          .classList.remove("tooltip_active");
        return;
      } else {
        addElement(tooltips[i]);
      }
    } else {
      addElement(tooltips[i]);
      document.querySelector(".tooltip").classList.add("tooltip_active");
    };
  });
};

function addElement(element) {
    let position = element.getBoundingClientRect();

  elementPrompt.setAttribute(
    "style",
    `left: ${position.left}px; top: ${position.top + 20}px`
  );
  elementPrompt.textContent = element.getAttribute("title");
  element.insertAdjacentElement("afterend", elementPrompt);
  event.preventDefault();
};
