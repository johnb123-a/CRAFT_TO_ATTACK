//SING_UP
const singupForm = document.querySelector("#FORMULARIO");
//Quiere decir que llamare este elemento cuando solo se haya hecho el submit
singupForm.addEventListener("submit", (e) => {
  //Cancela ese reinicio que hace por defecto los formularios de html
  e.preventDefault();

  singupEmail = document.querySelector("#sigup-correo").value;
  singupPassword = document.querySelector("#sigup-password").value;
  singupPassword2 = document.querySelector("#sigup-password2").value;
  try {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      const email = user.email;

      if (email !== singupEmail) {
        if (singupPassword.length > 6 || singupPassword2.length > 6) {
          if (singupPassword == singupPassword2) {
            auth
              .createUserWithEmailAndPassword(singupEmail, singupPassword)
              .then((userCredentials) => {
                //Limpia el formulario
                singupForm.reset();
                swal({
                  title: "Buen trabajo!",
                  text: "Usuario creado con exito, Bienvenido:" + singupEmail,
                  icon: "success",
                  button: "OK",
                });
                console.log("Usuario creado Bienvenido:", singupEmail.value);
              });
          } else {
            throw new Error("Las contraseñas no coinciden");
          } //console.log(singupEmail,singupPassword,singupPassword2)
        } else {
          throw new Error("La contraseña debe tener como minimo 6 caracteres");
        }
      } else {
        throw new Error(
          "El email que tratas de ingresar ya se encuentra en uso"
        );
      }
    }
  } catch (error) {
    swal("Oops", "Se produjo el siguiente " + error, "error");
  }
});
