let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com", true);
xhr.responseType = "json";
xhr.send();
xhr.onload = () => {
  if (xhr.readyState === 4) {
    let objVal = xhr.response.response.Valute;
    for (let i in objVal) {
      document.getElementById("loader").classList.remove("loader_active");
      document.getElementById("items").innerHTML += `
            <div class="item">
                <div class="item__code">
                </div>
                <div class="item__value">
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`;
      document
        .getElementById("items")
        .lastElementChild.querySelector(".item__code").textContent =
        objVal[i].CharCode;
      document
        .getElementById("items")
        .lastElementChild.querySelector(".item__value").textContent =
        objVal[i].Value;
    };
  };
};
