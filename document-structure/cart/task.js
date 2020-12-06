let quantityProducts = document.getElementsByClassName(
  "product__quantity-value"
); // кол-во прод. в каталоге

for (let i = 0; i < quantityProducts.length; i++) {
  quantityProducts[i].previousElementSibling.addEventListener("click", () => {
    quantityProducts[i].textContent--;
    if (quantityProducts[i].textContent < 1) {
      quantityProducts[i].textContent = 1;
    }
  });
  quantityProducts[i].nextElementSibling.addEventListener("click", () => {
    quantityProducts[i].textContent++;
  });
}

let productAdd = document.getElementsByClassName("product__add"); // массив кнопок "добавить"

for (let i = 0; i < productAdd.length; i++) {
  productAdd[i].addEventListener("click", () => {
    // карточки продуктов в корзине
    let arrCartProduct = Array.from(
      document
        .querySelector(".cart__products")
        .getElementsByClassName("cart__product")
    );
    // массив id продуктов в корзине
    let arrCartId = arrCartProduct.map((element) =>
      element.getAttribute("data-id")
    );
    // id добавляемого в корзину продукта
    let idProduct = productAdd[i].closest(".product").getAttribute("data-id");
    // значение src добавляемого продукта
    let srcProduct = productAdd[i]
      .closest(".product")
      .querySelector("img")
      .getAttribute("src");
    // количество добавляемого товара
    let productQuantityValue = quantityProducts[i].textContent;

    if (arrCartId.some((element) => element === idProduct)) {
      //продукт в корзине к которому добавляют
      let productCartAdd = arrCartProduct.find(
        (element) => element.getAttribute("data-id") === idProduct
      );

      //количество товара одного вида в корзине
      let productCartValue = (productCartAdd.querySelector(
        ".cart__product-count"
      ).textContent =
        Number(
          productCartAdd.querySelector(".cart__product-count").textContent
        ) + Number(productQuantityValue));
    } else {
      document.querySelector(".cart__products").innerHTML += `
            <div class="cart__product" data-id="${idProduct}">
                <img class="cart__product-image" src="${srcProduct}">
                <div class="cart__product-count">${productQuantityValue}</div>
            </div>`;
    }
  });
}
