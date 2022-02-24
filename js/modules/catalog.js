var database = firebase.database();
// write
database.ref("users/" + userId).set(user);

// read / listen
database.child("users").on("value", function (snapshot) {
  // ...
});

//создаем базу данных

