//отрисовка иконки для первичной авторизации

const iconProfile = document.querySelector(".header-account");
const popUpAuth = document.querySelector(".auth");
const authBtn = popUpAuth.querySelector(".registration-btn");
const closeBtn = popUpAuth.querySelector(".close-btn");
const inputMail = popUpAuth.querySelector("#input-mail");
const inputPassword = popUpAuth.querySelector("#input-password");
const warning = popUpAuth.querySelector(".warning");

const modalOpen = () => {
  popUpAuth.classList.toggle("modal-open");
  // warning.style.display = "none";
  inputMail.value = ""; //Обнуление полей
  inputPassword.value = "";

  if (popUpAuth.querySelector(".warning")) {
    popUpAuth.querySelector(".warning").remove();
  }
};

const createWarnMessage = () => {
  const div = document.createElement("div");
  div.classList.add("warning");
  div.textContent = "Ошибка авторизации!!!";
  authBtn.after(div);
};

const authUser = () => {
  //Запоминаем значение input
  const userMail = inputMail.value;
  const userPassword = inputPassword.value;

  //сравниваем со всей базой данных LS и сравниваем их
  const users = JSON.parse(localStorage.getItem("users"));
  users.forEach((user) => {
    if (userMail === user.mail && userPassword === user.password) {
      const authUser = { mail: userMail, password: userPassword };
      localStorage.setItem("auth_user", JSON.stringify(authUser)); //Преобразовали в JSON формат
      window.location.reload(); // перезагрузка текущей страницы
    } else {
      // warning.style.display = "block";
      createWarnMessage();
    }
  });
};

if (!iconProfile.classList.contains("log")) {
  //если НЕТ класса log - открываtут модальное окно с авторизацией
  iconProfile.addEventListener("click", modalOpen);
  authBtn.addEventListener("click", authUser); //по клику добавляем обработчик событий на кнопку Авторизацию
}

//обработчик закрытия кнопкой

// closeBtn.addEventListener("click", modalOpen);
popUpAuth.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("close-btn") === true || //закрытие на крестик
    e.target.classList.contains("b-popup") === true //закрытие при нажатии на поле
  ) {
    modalOpen();
  }
});
//авторизация пользователя
