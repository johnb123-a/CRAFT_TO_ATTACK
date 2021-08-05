
//Comprueba si el usuario si esta logeado o no cada vez que entre o salga un usuario se dispara este auth
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('usuario logeado');
    document.getElementById('Logout').style.display='inline';
    document.getElementById('Login').style.display='none';
    document.getElementById('BTN_CARRO').style.display='inline';
    document.getElementById('Btn1.1').style.display='none';
    document.getElementById('Btn1').style.display='inline';
    document.getElementById('Btn2.1').style.display='none';
    document.getElementById('Btn2').style.display='inline';
    document.getElementById('Btn3.1').style.display='none';
    document.getElementById('Btn3').style.display='inline';
    document.getElementById('Btn4.1').style.display='none';
    document.getElementById('Btn4').style.display='inline';
    document.getElementById('Btn5.1').style.display='none';
    document.getElementById('Btn5').style.display='inline';
    document.getElementById('Btn6.1').style.display='none';
    document.getElementById('Btn6').style.display='inline';
    document.getElementById('Btn7.1').style.display='none';
    document.getElementById('Btn7').style.display='inline';
    document.getElementById('Btn8.1').style.display='none';
    document.getElementById('Btn8').style.display='inline';
    document.getElementById('Btn9.1').style.display='none';
    document.getElementById('Btn9').style.display='inline';
    document.getElementById('Btn10.1').style.display='none';
    document.getElementById('Btn10').style.display='inline';
    document.getElementById('Btn11.1').style.display='none';
    document.getElementById('Btn11').style.display='inline';
    document.getElementById('Btn12.1').style.display='none';
    document.getElementById('Btn12').style.display='inline';
    document.getElementById('Btn13.1').style.display='none';
    document.getElementById('Btn13').style.display='inline';
    document.getElementById('Btn14.1').style.display='none';
    document.getElementById('Btn14').style.display='inline';
    document.getElementById('Btn15.1').style.display='none';
    document.getElementById('Btn15').style.display='inline';

    document.getElementById('Btn16.1').style.display='none';
    document.getElementById('Btn16').style.display='inline';
    document.getElementById('Btn17.1').style.display='none';
    document.getElementById('Btn17').style.display='inline';
    document.getElementById('Btn18.1').style.display='none';
    document.getElementById('Btn18').style.display='inline';
    document.getElementById('Btn19.1').style.display='none';
    document.getElementById('Btn19').style.display='inline';
    document.getElementById('Btn20.1').style.display='none';
    document.getElementById('Btn20').style.display='inline';
    document.getElementById('Btn21.1').style.display='none';
    document.getElementById('Btn21').style.display='inline';
    document.getElementById('Btn22.1').style.display='none';
    document.getElementById('Btn22').style.display='inline';
    document.getElementById('Btn23.1').style.display='none';
    document.getElementById('Btn23').style.display='inline';

    document.getElementById('Btn24.1').style.display='none';
    document.getElementById('Btn24').style.display='inline';
    document.getElementById('Btn25.1').style.display='none';
    document.getElementById('Btn25').style.display='inline';
    document.getElementById('Btn26.1').style.display='none';
    document.getElementById('Btn26').style.display='inline';
    document.getElementById('Btn27.1').style.display='none';
    document.getElementById('Btn27').style.display='inline';
    document.getElementById('Btn28.1').style.display='none';
    document.getElementById('Btn28').style.display='inline';
    document.getElementById('Btn29.1').style.display='none';
    document.getElementById('Btn29').style.display='inline';
    document.getElementById('Btn30.1').style.display='none';
    document.getElementById('Btn30').style.display='inline';
    document.getElementById('Btn31.1').style.display='none';
    document.getElementById('Btn31').style.display='inline';

    document.getElementById('Btn32.1').style.display='none';
    document.getElementById('Btn32').style.display='inline';
    document.getElementById('Btn33.1').style.display='none';
    document.getElementById('Btn33').style.display='inline';
    document.getElementById('Btn34.1').style.display='none';
    document.getElementById('Btn34').style.display='inline';
    document.getElementById('Btn35.1').style.display='none';
    document.getElementById('Btn35').style.display='inline';

    document.getElementById('Btn36.1').style.display='none';
    document.getElementById('Btn36').style.display='inline';
    document.getElementById('Btn37.1').style.display='none';
    document.getElementById('Btn37').style.display='inline';
    document.getElementById('Btn38.1').style.display='none';
    document.getElementById('Btn38').style.display='inline';
    document.getElementById('Btn39.1').style.display='none';
    document.getElementById('Btn39').style.display='inline';

    document.getElementById('Btn36.1').style.display='none';
    document.getElementById('Btn36').style.display='inline';
    document.getElementById('Btn37.1').style.display='none';
    document.getElementById('Btn37').style.display='inline';
    document.getElementById('Btn38.1').style.display='none';
    document.getElementById('Btn38').style.display='inline';
    document.getElementById('Btn39.1').style.display='none';
    document.getElementById('Btn39').style.display='inline';
    
    document.getElementById('Btn40.1').style.display='none';
    document.getElementById('Btn40').style.display='inline';
    document.getElementById('Btn41.1').style.display='none';
    document.getElementById('Btn41').style.display='inline';
    document.getElementById('Btn42.1').style.display='none';
    document.getElementById('Btn42').style.display='inline';
    document.getElementById('Btn43.1').style.display='none';
    document.getElementById('Btn43').style.display='inline';
    document.getElementById('Btn44.1').style.display='none';
    document.getElementById('Btn44').style.display='inline';
    document.getElementById('Btn45.1').style.display='none';
    document.getElementById('Btn45').style.display='inline';
    document.getElementById('Btn46.1').style.display='none';
    document.getElementById('Btn46').style.display='inline';
    document.getElementById('Btn47.1').style.display='none';
    document.getElementById('Btn47').style.display='inline';

    document.getElementById('Btn48.1').style.display='none';
    document.getElementById('Btn48').style.display='inline';
    document.getElementById('Btn49.1').style.display='none';
    document.getElementById('Btn49').style.display='inline';
    document.getElementById('Btn50.1').style.display='none';
    document.getElementById('Btn50').style.display='inline';
    document.getElementById('Btn51.1').style.display='none';
    document.getElementById('Btn51').style.display='inline';
    document.getElementById('Btn52.1').style.display='none';
    document.getElementById('Btn52').style.display='inline';
    document.getElementById('Btn53.1').style.display='none';
    document.getElementById('Btn53').style.display='inline';

    document.getElementById('Btn54.1').style.display='none';
    document.getElementById('Btn54').style.display='inline';
    document.getElementById('Btn55.1').style.display='none';
    document.getElementById('Btn55').style.display='inline';
    document.getElementById('Btn56.1').style.display='none';
    document.getElementById('Btn56').style.display='inline';
    document.getElementById('Btn57.1').style.display='none';
    document.getElementById('Btn57').style.display='inline';

    document.getElementById('Btn58.1').style.display='none';
    document.getElementById('Btn58').style.display='inline';
    document.getElementById('Btn59.1').style.display='none';
    document.getElementById('Btn59').style.display='inline';
    document.getElementById('Btn60.1').style.display='none';
    document.getElementById('Btn60').style.display='inline';
    document.getElementById('Btn61.1').style.display='none';
    document.getElementById('Btn61').style.display='inline';
    document.getElementById('Btn62.1').style.display='none';
    document.getElementById('Btn62').style.display='inline';
    document.getElementById('Btn63.1').style.display='none';
    document.getElementById('Btn63').style.display='inline';
    
    document.getElementById('Btn64.1').style.display='none';
    document.getElementById('Btn64').style.display='inline';
    document.getElementById('Btn65.1').style.display='none';
    document.getElementById('Btn65').style.display='inline';
    document.getElementById('Btn66.1').style.display='none';
    document.getElementById('Btn66').style.display='inline';

    document.getElementById('Btn67.1').style.display='none';
    document.getElementById('Btn67').style.display='inline';
    document.getElementById('Btn68.1').style.display='none';
    document.getElementById('Btn68').style.display='inline';
    document.getElementById('Btn69.1').style.display='none';
    document.getElementById('Btn69').style.display='inline';
    document.getElementById('Btn70.1').style.display='none';
    document.getElementById('Btn70').style.display='inline';
    document.getElementById('Btn71.1').style.display='none';
    document.getElementById('Btn71').style.display='inline';
    document.getElementById('Btn72.1').style.display='none';
    document.getElementById('Btn72').style.display='inline';

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


