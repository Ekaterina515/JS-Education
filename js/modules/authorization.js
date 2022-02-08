//отрисовка иконки для первичной авторизации

const iconProfile = document.querySelector(".header-account.guest");
const popUpAuth = document.querySelector(".auth");
const authBtn = popUpAuth.querySelector(".registration-btn");
const closeBtn = popUpAuth.querySelector(".close-btn");
const inputMail = popUpAuth.querySelector("#input-mail");
const inputPassword = popUpAuth.querySelector("#input-password");

const modalOpen = () => {
  popUpAuth.classList.toggle("modal-open");
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
    }
  });
};

iconProfile.addEventListener("click", modalOpen);
authBtn.addEventListener("click", authUser);

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
