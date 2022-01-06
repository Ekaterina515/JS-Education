const addToCart = () => {
  const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

  // console.log(addToCartBtn);
  // Создаем пустой массив для выбранных товаров
  const cart = [];

  const addGoodsToCart = (clickedId) => {
    // Вводим переменную для определения, есть ли совпадения выбранного товара по id с теми, которые уже в корзине
    let goodIsInCart = false;

    // В цикле обходим массив cart и проверяем, есть ли совпадения
    // по id с выбранным товаром
    cart.forEach((good) => {
      if (good.id == clickedId) {
        // Если совпадение есть, увеличиваем количество
        good.count++;
        // И указываем, что такой товар уже в корзине
        goodIsInCart = true;
      }
    });

    // Добавление товара в корзину, если не было совпадений.
    // Или добавление товара, если корзина пустая.
    if (goodIsInCart === false || cart.length === 0) {
      const goodItem = {
        id: clickedId,
        count: 1,
      };
      cart.push(goodItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Навешиваем обработчики событий на все выбранные кнопки добавления товаров в корзину
  addToCartBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      // В отдельную переменную записываем id выбранного товара
      const clickedId = e.target.closest(".card").dataset["id"];
      const clickedName = e.target
        .closest(".card") //он понимает какая это карточка
        .querySelector(".products-name").textContent; //теперь он понимает какой элемент в карточке нам нужен
      addGoodsToCart(clickedId);
    });
  });
};
setTimeout(addToCart, 1000);
