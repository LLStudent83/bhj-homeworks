let sideElement = document.querySelector(".chat-widget__side");
let widgetElement = document.querySelector(".chat-widget");
let inputElement = document.getElementById("chat-widget__input");
//let sizeWindowСhat = document.querySelector(".chat-widget__area").getBoundingClientRect(); // для прокрутки

let textMessagesArr = [
  "Добрый день",
  "Чем могу помоч?",
  "Мв Вам ни чем помоч не можем )",
  "До скорой встречи !!!!",
];
function randomNumber() {
  return Math.floor(Math.random() * Math.floor(textMessagesArr.length));
}

sideElement.addEventListener("click", () => {
  widgetElement.classList.add("chat-widget_active");
});

inputElement.addEventListener("change", () => {
  let time = `${new Date().getHours()}:${new Date().getMinutes()}`;

  document.getElementById("chat-widget__messages").innerHTML += `
    <div class="message message_client">
      <div id="timeid" class="message__time"></div>
      <div class="message__text"></div>
    </div>
  `;
  let messageArr = document
    .getElementById("chat-widget__messages")
    .getElementsByClassName("message");
  let lastMessage = messageArr[messageArr.length - 1];
  lastMessage.querySelector(".message__time").textContent = time;

  lastMessage.querySelector(".message__text").textContent = inputElement.value;
  inputElement.value = "";

  document.getElementById("chat-widget__messages").innerHTML += `
    <div class="message ">
      <div id="timeid" class="message__time"></div>
      <div class="message__text"></div>
    </div>
  `;
  messageArr = document
    .getElementById("chat-widget__messages")
    .getElementsByClassName("message");
  lastMessage = messageArr[messageArr.length - 1];
  lastMessage.querySelector(".message__time").textContent = time;
  lastMessage.querySelector(".message__text").textContent =
    textMessagesArr[randomNumber()];
  //let sizeMess = lastMessage.getBoundingClientRect(); // для прокрутки
  //if (sizeMess.bottom > sizeWindowСhat.height) {
    //sizeMess.bottom = sizeWindowСhat.height;
  //}
});
