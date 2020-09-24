const element = document.getElementById("cookie"); // событие
let i = 0;
element.onclick = function () {
  i++;
  document.getElementById("clicker__counter").innerHTML = i;
  i % 2 === 0 ? element.width = 200 : element.width = 300;
  ;
};

//document.getElementById("p1").innerHTML = "New text!";
//let result = условие ? значение1 : значение2;