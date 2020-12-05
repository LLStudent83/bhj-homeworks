let tooltips = Array.from(document.getElementsByClassName("has-tooltip"));
for(let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("click", () => {
        if(document.querySelector(".tooltip")) {
            document.querySelector(".tooltip").remove();
        };
       let elementPrompt = document.createElement("div")
       elementPrompt.classList.add("tooltip");
       elementPrompt.classList.add("tooltip_active")
       elementPrompt.textContent = tooltips[i].getAttribute("title");
       let position = tooltips[i].getBoundingClientRect();
       elementPrompt.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px`)
       tooltips[i].insertAdjacentElement("afterend", elementPrompt);
       console.log(position);

       event.preventDefault();
    })
}


