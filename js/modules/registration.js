//получение всех полей ввода со страницы Registration

const regName = document.querySelector("#input-name");
const regLastName = document.querySelector("#input-last-name");

let regGender = "";
const regGenders = document.querySelectorAll("#radio-gender");

const regMail = document.querySelector("#input-mail");
const regPassword = document.querySelector("#input-password");
const btnSubmit = document.querySelector(".registration-btn");
const popUp = document.querySelector(".b-popup");

// let users =
//   localStorage.getItem("users") === null
//     ? []
//     : JSON.parse(localStorage.getItem("users")); // тоже самое, что if ниже

let users;
if (localStorage.getItem("users") === null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

const rendomId = () => {
  //получение случайного числа
  return String(Math.random()).slice(3, 8); //изменили число в строку и выбрали нужный нам диапазон для id
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  regGenders.forEach((gender) => {
    if (gender.checked) {
      regGender = gender;
    }
  });

  const newUser = {
    id: rendomId(),
    name: regName.value,
    lastName: regLastName.value,
    gender: regGender.classList[1],
    mail: regMail.value,
    password: regPassword.value,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem(
    "auth_user",
    JSON.stringify({ mail: regMail.value, password: regPassword.value })
  ); //автоматически добавляем юзера в LS после регистрации

  document.querySelector("form").reset(); //обнуление строк после отпраки

  popUp.style.display = "flex"; //добавляем к классу свойство fles
  setTimeout(() => {
    window.location.replace("index.html"); //делаем переадресацию на главную страницу через 2 сек
  }, 2000);
});

//Получение всего списка пользователей. +
//Добавление нового пользователя в список и перезапись. +
//Поп-Ап с успешной регистрацией и отправка на Главную страницу +
//Проверка на валидацию.
//Сделать окошко c запросом Логин и Пароль +
///Страница Личного кабинета +
///пагинация
///создание страниц товаров
