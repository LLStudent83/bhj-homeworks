let elemReveal = document.getElementsByClassName("reveal");
let windowHeight = window.innerHeight;

for (let i = 0; i < elemReveal.length; i++) {
  window.addEventListener("scroll", () => {
    
    let y = elemReveal[i].getBoundingClientRect();
    if (y.top < windowHeight) {
      elemReveal[i].classList.add("reveal_active");
    } 
  });
}
