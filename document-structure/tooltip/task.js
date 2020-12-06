let tooltips = Array.from(document.getElementsByClassName("has-tooltip"));
for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", () => {
    if (
        document.querySelector(".tooltip_active") &&
        tooltips[i].nextElementSibling.classList.contains("tooltip_active") 
      ) {
        document
          .querySelector(".tooltip_active")
          .classList.remove("tooltip_active");
          event.preventDefault();
          return
      }
    if (!document.querySelector(".tooltip_active")) {
      if (tooltips[i].nextElementSibling.classList.contains("tooltip")) {
        tooltips[i].nextElementSibling.classList.add("tooltip_active");
      } else {
        addElement(tooltips[i]);
      }
    } else {
      if (
        document.querySelector(".tooltip_active") &&
        !tooltips[i].nextElementSibling.classList.contains("tooltip_active")
      ) {
        document
          .querySelector(".tooltip_active")
          .classList.remove("tooltip_active");

        if (tooltips[i].nextElementSibling.classList.contains("tooltip")) {
          tooltips[i].nextElementSibling.classList.add("tooltip_active");
        } else {
          addElement(tooltips[i]);
        }
      }
      
      
    }
    event.preventDefault();
  });
}

function addElement(element) {
  let elementPrompt = document.createElement("div");
  elementPrompt.classList.add("tooltip");
  elementPrompt.classList.add("tooltip_active");
  elementPrompt.textContent = element.getAttribute("title");
  let position = element.getBoundingClientRect();
  elementPrompt.setAttribute(
    "style",
    `left: ${position.left}px; top: ${position.top + 20}px`
  );
  element.insertAdjacentElement("afterend", elementPrompt);
}
