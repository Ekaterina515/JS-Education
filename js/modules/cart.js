const cartProductsSection = document.querySelector(".cart-products");

const goodsList = JSON.parse(localStorage.getItem("cart"));

// console.log(goodsList);

const renderGoodsToCart = (good) => {
  const singleGood = `<div class="shopping-card" data-id="${good.id}">
  <img class="card__img" src="${good.photo}" alt="${good.name}"
  />
  <div class="card__text-block">
    <h3 class="card__name">
     "${good.name}" </h3>
    <p class="card__item">
      Price: <span class="products-price" data-single-price="${good.price}">$${
    good.price
  }</span>
    </p>
    ${
      good.color
        ? '<p class="card__item"> Color: <span class="card__item-grey">' +
          good.color +
          "</span> </p>"
        : ""
    } 
    <p class="card__item">
      Size: <span class="card__item-grey">${good.size}</span>
    </p>
    <p class="card__item">
      Quantity:
      <input
        value="1"
        min="1"
        class="card__quantity"
        type="number"
      />
    </p>
  </div>
  <button class="card__close">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
    </svg>
  </button>
</div>`;

  cartProductsSection.insertAdjacentHTML("beforeend", singleGood);
};

const sumAllItems = (array, indicator) => {
  //array - массив из LS или из карточекб indicator -булево значение
  let totalPrice = 0;

  if (indicator) {
    array.forEach((card) => {
      //Обходим/ребираем все карточки товаров
      const productsPrice = +card // каждую карточку назвали card
        .querySelector(".products-price") //в этой карточке ищем span .product price
        .textContent.slice(1); //textContent - содержимое между тэгов и она выводится как строка, отрезаем $ от цены

      totalPrice = totalPrice + productsPrice; //как ящик: к имеющему содержимому прибывляем все новые карточки
    });
  } else {
    array.forEach((good) => {
      totalPrice = totalPrice + +good.price;
    });
  }
  document.querySelector(".cart-price-title-pink").textContent =
    "$" + totalPrice;
};

const deleteFromCart = (index) => {
  let newCart = goodsList.splice(2, 1);
  console.log(newCart);
  // localStorage.setItem("cart", JSON.stringify(newCart)); //зашифровываем в JSON
};

//функция получения всех данных
// const getData = async () => {
//   const data = await fetch(
//     "https://brandshop-76eb2-default-rtdb.europe-west1.firebasedatabase.app/db.json"
//   );
//   return data.json();
// };

// const filterGoods = () => {
// getData().then((data) => {
cartProductsSection.innerHTML = ""; //обнуление всей корзины
//преобразование всех данных в массив (чтобы применять методы обхода)
goodsList.forEach((item) => renderGoodsToCart(item)); //отрисовка всех данных
sumAllItems(goodsList, false);
//элемент названеи не важно. Обходим каждый элемент из Local storage
// data.filter(
//обходим каждый элемент из базы данных
// (element) => {
//   if (item.id === element.id) renderGoodsToCart(element);
// console.log(element); //сравниваем id Из LocalStorage с id Из базы данных

//   );
// });
// });
// };
// filterGoods();

//получение всех карточек в корзине из ЛокалСтораж
const shoppingCards = document.querySelectorAll(".shopping-card"); //получение карточек после отрисовки
const closeBtns = document.querySelectorAll(".card__close");

//функция суммирования всех товаров в корзине
shoppingCards.forEach((shoppingCard) => {
  shoppingCard.addEventListener("change", (e) => {
    const quantity = shoppingCard.querySelector(".card__quantity").value;
    const singlePrice =
      shoppingCard.querySelector(".products-price").dataset.singlePrice;
    const totalSinglePrice = quantity * singlePrice;

    shoppingCard.querySelector(".products-price").textContent =
      "$" + totalSinglePrice;

    sumAllItems(shoppingCards, true);
  });
});

//навешивание обработчиков союытий на кнопку удаления карточек из корзины
closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", (e) => {
    deleteFromCart(index); //функция удаления из массива
    // cartProductsSection.innerHTML = ""; //обнудение корзины
    // const cartUpdate = JSON.parse(localStorage.getItem("cart")); //получение новых данных из массива
    // cartUpdate.forEach((item) => renderGoodsToCart(item)); //отрисовка заново всех данных
    // sumAllItems(cartUpdate, false);
  });
});
