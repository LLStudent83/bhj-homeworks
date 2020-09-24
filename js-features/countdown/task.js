let timer = document.getElementById("timer").textContent;

function getTimer() {
    timer = timer - 1;
    document.getElementById("timer").innerHTML = timer; 

    if (timer === 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(id);
    }
  }
  let id = setInterval(getTimer, 1000);