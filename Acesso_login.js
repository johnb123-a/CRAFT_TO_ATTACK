auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("usuario logeado");
    document.getElementById("Tiendabtn").style.display = "inline";
  } else {
    console.log("usuario no logeado");
    // ...
  }
});
