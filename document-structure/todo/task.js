let arrTasks = [];

function addTask() {
  let inputText = document.getElementById("task__input").value;
  if (inputText == "") {
    alert("Ты забыл написать задание");
    return;
  }
  let element = document.createElement("div");
  element.innerHTML += `<div class="task">
        <div class="task__title">
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`;

  document
    .getElementById("tasks__list")
    .insertAdjacentElement("beforeend", element);
  arrTasks = document.getElementsByClassName("task__title");

  arrTasks[arrTasks.length - 1].textContent = inputText;
  inputText = document.getElementById("task__input").value = "";
  arrTasks[arrTasks.length - 1].nextElementSibling.addEventListener(
    "click",
    () => element.remove()
  );
}

document.getElementById("tasks__add").addEventListener("click", addTask);
