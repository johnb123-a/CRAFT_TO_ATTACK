
//Comprueba si el usuario si esta logeado o no cada vez que entre o salga un usuario se dispara este auth
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('usuario logeado');
    document.getElementById('Logout').style.display='inline';
    document.getElementById('Login').style.display='none';
    document.getElementById('Button').style.display='block';
    document.getElementById('Button2').style.display='block'; 
    document.getElementById('Button3').style.display='block'; 
    document.getElementById('Button4').style.display='block'; 
    document.getElementById('Button5').style.display='block'; 
    document.getElementById('Button6').style.display='block'; 
    document.getElementById('Button7').style.display='block'; 
    document.getElementById('Button8').style.display='block'; 
    document.getElementById('Button9').style.display='block'; 
    document.getElementById('Button10').style.display='block'; 
    document.getElementById('Button11').style.display='block';
    document.getElementById('Button12').style.display='block';

  } else {
    console.log('usuario no logeado');
    // ...
  }
});
const logout=document.querySelector('#Logout');
logout.addEventListener('click',e =>{
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log('sing out')
        location.reload()
    })
});


