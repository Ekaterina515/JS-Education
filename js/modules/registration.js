//получение всех полей ввода со страницы Registration

const regName = document.querySelector("#input-name");
const regLastName = document.querySelector("#input-last-name");

let regGender = "";
const regGenders = document.querySelectorAll("#radio-gender");

const regMail = document.querySelector("#input-mail");
const regPassword = document.querySelector("#input-password");
const btnSubmit = document.querySelector(".registration-btn");

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

  localStorage.setItem("users", JSON.stringify(newUser));
  document.querySelector("form").reset(); //обнуление строк после отпраки
});

//Получение всего списка пользователей.
//Добавление нового пользователя в список и перезапись.
//Поп-Ап с успешной регистрацией и отправка на Главную страницу
//Проверка на валидацию.
//Сделать окошко c запросом Логин и Пароль
///Страница Личного кабинета
