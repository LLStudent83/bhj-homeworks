let deadth = 0;
let life = 0;
getHole = (index) => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
  let element = getHole(i);
  element.onclick = function () {
    if (element.className.includes("hole_has-mole")) {
      deadth++;
      document.getElementById("dead").innerHTML = deadth;
      if (deadth === 10) {
        alert("Вы выиграли");
        deadth = 0;
        life = 0;
        document.getElementById("lost").innerHTML = life;
        document.getElementById("dead").innerHTML = deadth;
      }
    } else {
      life++;
      document.getElementById("lost").innerHTML = life;
      if (life === 5) {
        alert("Вы проиграли");
        life = 0;
        deadth = 0;
        document.getElementById("lost").innerHTML = life;
        document.getElementById("dead").innerHTML = deadth;
      }
    }
  };
}
