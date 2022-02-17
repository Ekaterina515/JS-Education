let authUser = JSON.parse(localStorage.getItem("auth_user"));
const userMail = document.getElementById("input-mail");
const userPassword = document.getElementById("input-password");
const userCountry = document.getElementById("input-country");

//вынимаем из базы данных все поля

const allUsersInfo = JSON.parse(localStorage.getItem("users"));

// let authUserInfo;
// allUsersInfo.forEach((item, index) => {
//   if (item.mail === authUser.mail && item.password === authUser.password) {
//     authUserInfo = allUsersInfo[index];
//   }
// });

let authUserInfo = allUsersInfo.filter(
  (item) => item.mail === authUser.mail && item.password === authUser.password
)[0];

userMail.value = authUserInfo.mail;
userPassword.value = authUserInfo.password;
userCountry.value = authUserInfo.country ? authUserInfo.country : "";
