let authUser = JSON.parse(localStorage.getItem("auth_user"));
const userMail = document.getElementById("input-mail");
const userPassword = document.getElementById("input-password");
const userName = document.getElementById("input-name");
const userLastName = document.getElementById("input-last-name");
const userGender = document.querySelectorAll("#radio-gender");
const userPhone = document.getElementById("input-phone");
const userCountry = document.getElementById("input-country");
const userAddress = document.getElementById("input-address");
const saveBtn = document.querySelector(".save-btn");

//вынимаем из базы данных все поля

const allUsersInfo = JSON.parse(localStorage.getItem("users")); //вес пользователи allUsersUnfo- массиы

// let authUserInfo;
// allUsersInfo.forEach((item, index) => {
//   if (item.mail === authUser.mail && item.password === authUser.password) {
//     authUserInfo = allUsersInfo[index];
//   }
// });
let userIndex; //обращаемся к Index пользователя
let authUserInfo = allUsersInfo.filter((item, index) => {
  if (item.mail === authUser.mail && item.password === authUser.password) {
    userIndex = index;
    return item;
  }
})[0]; //0 - потому что по длогике может совпасть только дин пользователь

userMail.value = authUserInfo.mail;
userPassword.value = authUserInfo.password;
userName.value = authUserInfo.name ? authUserInfo.name : "";
userLastName.value = authUserInfo.lastName ? authUserInfo.lastName : "";
userGender.forEach((item) => {
  if (item.classList[1] === authUserInfo.gender) {
    //получаем со страницы 2 кнопки, перебираем их, сравниваем класс, соответствует ли он Gender пользователя
    item.checked = true; //указываем true тому классу, который совпал
  }
});
userPhone.value = authUserInfo.phone ? authUserInfo.phone : "";
userCountry.value = authUserInfo.country ? authUserInfo.country : "";
userAddress.value = authUserInfo.address ? authUserInfo.address : "";

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  allUsersInfo[userIndex].address = userAddress.value;
  allUsersInfo[userIndex].phone = userPhone.value;
  allUsersInfo[userIndex].country = userCountry.value;
  localStorage.setItem("users", JSON.stringify(allUsersInfo));
});

//добавить картинку
//Firebase
//пагинация
//отправка заявок
