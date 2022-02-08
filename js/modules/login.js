//проверка содержится ли в Local Storage запись о пользователе

const headerAccount = document.querySelector(".header-account");

const currentUser =
  JSON.parse(localStorage.getItem("auth_user")) === null
    ? ""
    : JSON.parse(localStorage.getItem("auth_user"));

if (currentUser) {
  headerAccount.classList.add("log"); //добавляем класс в верстку при добавлении гостя
  headerAccount.classList.remove("guest"); //удаляем класс guest
  //отрисовка для автризованного пользователя
  headerAccount.innerHTML =
    '<img src="./img/profile.png">' +
    '<svg class="logout" width="29" height="29" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 53 53" style="enable-background:new 0 0 53 53;"xml:space="preserve"><g>	<g><rect x="27" y="29" width="3" height="2"/><path d="M45,51V1c0-0.122-0.029-0.239-0.071-0.351c-0.008-0.02-0.013-0.04-0.022-0.06c-0.046-0.101-0.108-0.192-0.185-0.274 c-0.016-0.016-0.032-0.03-0.049-0.046c-0.029-0.026-0.054-0.056-0.085-0.079c-0.059-0.043-0.122-0.076-0.188-0.105 c-0.005-0.002-0.009-0.006-0.014-0.008c-0.111-0.046-0.229-0.066-0.349-0.07C44.024,0.007,44.013,0,44,0H10C9.447,0,9,0.448,9,1 v50H4v2h6h34h5v-2H45z M25,47.18V8.227l18-5.85V50.78L25,47.18z M11,2h26.687L23.69,6.549C23.279,6.683,23,7.067,23,7.5V48 c0,0.477,0.337,0.887,0.804,0.98L33.901,51H11V2z"/></g></g> <svg>';
  headerAccount.href = "lk.html";
} else {
  headerAccount.classList.add("guest"); //добавляем класс в верстку если гость не авторизован

  headerAccount.classList.remove("log"); //если гость не авторизован, то класс log удаляется

  headerAccount.innerHTML =
    ' <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"/></svg > ';
}

const logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("out");
});
