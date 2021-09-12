
const botoncandado = document.querySelector('.recuperar')
botoncandado.addEventListener('click', (e) => {

  elemento = document.getElementById("candado"); 
  elemento2 = document.getElementById("candado2"); 
        if(elemento2.style.display=="inline") 
        { 
          elemento2.style.display="none"; 
          elemento.style.display="inline"; 
        }else{
          elemento.style.display="none"; 
          elemento2.style.display="inline"; 
        }        
});


//LOGIN
const logingForm = document.querySelector('#FORMULARIO')

logingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    loginEmail= document.querySelector('#login-correo').value;
    loginPassword= document.querySelector('#login-password').value;
    console.log(loginEmail,loginPassword)

    auth
    .signInWithEmailAndPassword(loginEmail,loginPassword)
    .then(userCredentials => {
        //Limpia el formulario
        logingForm.reset();
        
        swal("Ingreso Exitoso!", " Bienvenido: "+loginEmail+", en unos segundos te redirigiremos a nuestra pagina de compras", "success");
        setTimeout(function(){window.location.href="TIENDA.html";},5000)
        //window.alert("Ingreso Exitoso, Bienvenido: "+loginEmail);
        console.log('Ingreso Exitoso:',loginEmail.value)
    })
    .catch(err => {
       swal("Ohh no!", "Algo ha sucecido por favor intentalo mas tarde!", "error");
       console.log(err);
     })
    //window.alert("El usuario no existe"); 
});

//Comprueba si el usuario si esta logeado o no cada vez que entre o salga un usuario se dispara este auth
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('usuario logeado');

  } else {
    console.log('usuario no logeado');
    // ...
  }
});
//RESTABLECER CONTRASEÑA DE USUARIO

var cambio_pw = function(){
  const loginEmail= document.querySelector('#login-correo').value;
  auth.sendPasswordResetEmail(loginEmail)
  .then(() => {
    swal("Se ha enviado un correo a su cuenta, por favor siga todas las intruciones");
    
  })
  .catch((err) => {
    swal("Ohh no!", "Asegura que escribiste bien tu correo!", "error");
    console.log(err);
  });
}


//GOOGLE LOGIN
const googleButton = document.querySelector('#Googlelogin')
googleButton.addEventListener('click',e => {
  //Se le pone el new porque es un objecto que se intancia a partir de una clase
  //Esto es para decirle que quiero autenticar con google
  const provider = new firebase.auth.GoogleAuthProvider();
  //Esto abrira una ventana 
  auth.signInWithPopup(provider)
    .then(result =>{
     swal("Ingreso Exitoso! BIENVENIDO","En unos segundos te redirigiremos a nuestra pagina de compras", "success");
     setTimeout(function(){window.location.href="TIENDA.html";},5000)
     console.log('Sesion iniciada con google');
    
    })
    .catch(err => {
      swal("Ohh no!", "Algo ha sucecido por favor intentalo mas tarde!", "error");
      console.log(err);
    })

});

//FACEBOOK LOGIN
const facebookButton = document.querySelector('#Facebooklogin')
facebookButton.addEventListener('click',e =>{
 const provider = new firebase.auth.FacebookAuthProvider();
 //Esto abrira una ventana 
 firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    console.log(credential);
    console.log(user);
    console.log(accessToken);

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});
//TWITTER LOGIN
const twitterButton = document.querySelector('#Twitterlogin')
twitterButton.addEventListener('click',e =>{
    const provider = new firebase.auth.TwitterAuthProvider();
 
  auth.signInWithRedirect(provider)
  .then((result) => {
    setTimeout(function(){window.location.href="TIENDA.html";},5000)
    swal("Ingreso Exitoso!","BIENVENIDO","En unos segundos te redirigiremos a nuestra pagina de compras", "success");
    console.log('Sesion iniciada con Twitter');
  }).catch(err => {
       swal("Ohh no!", "Algo ha sucecido por favor intentalo mas tarde!", "error");
       console.log(err);
  })
});
