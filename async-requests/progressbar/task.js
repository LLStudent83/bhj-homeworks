let form = document.getElementById("form");
let xhr = new XMLHttpRequest();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  
  xhr.upload.onprogress = function (event) {
    let valueProgress = event.loaded / event.total;
    document.getElementById("progress").setAttribute("value", valueProgress);
  };

  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);

  xhr.send(formData);
  
});