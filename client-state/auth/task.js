let alemSignin = document.getElementById("signin");
let forma = document.getElementById("signin__form");
let xhr = new XMLHttpRequest();

alemSignin.classList.add("signin_active");

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(forma);
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php", true);
  xhr.responseType = "json";
  xhr.send(formData);
});

xhr.addEventListener("load", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response);
    if (xhr.response.success === false) {
      alert("«Неверный логин/пароль»");
    }
    if (xhr.response.success === true) {
      localStorage.setItem("user_id", xhr.response.user_id);

      document.getElementById("user_id").textContent = xhr.response.user_id;
      document.getElementById("welcome").classList.add("welcome_active");
      alemSignin.classList.remove("signin_active");
    }
  }
});

if (localStorage.user_id) {
  document.getElementById("welcome").classList.add("welcome_active");
  alemSignin.classList.remove("signin_active");
}
