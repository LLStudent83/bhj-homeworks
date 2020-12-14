let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php", true);
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("load", () => {
  if (xhr.readyState === 4) {
    console.log(xhr.response);
    let optionsAnswers = xhr.response.data.answers;
    let question = xhr.response.data.title;
    let elemTitle = document.getElementById("poll__title");
    let elemPoll = document.getElementById("poll__answers");

    elemTitle.textContent = question;

    for (let i = 0; i < optionsAnswers.length; i++) {
      elemPoll.innerHTML += `
                <button class="poll__answer">
                </button> 
            `;
      elemPoll.lastElementChild.textContent = optionsAnswers[i];
    }
    let buttonsAnswer = document.getElementsByClassName("poll__answer");
    for (let i = 0; i < buttonsAnswer.length; i++) {
      buttonsAnswer[i].addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    };
  };
});
