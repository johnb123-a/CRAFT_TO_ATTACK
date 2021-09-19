var tabla = document.getElementById("Tabla");
//LEER DOCUMENTOS
db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data()}`);
    tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
        </tr>
        `;
  });
});

function Buscador() {
  const value = document.getElementById("ID").value;
  if (value != "") {
    let validacion = false;
    db.collection("PRODUCTS")
      .where("Id", "==", value)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tabla.innerHTML = `
            <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
            </tr>
            `;
          //console.log(doc.id, " => ", doc.data().Id);
          //console.log(doc.id, " => ", doc.data().Nombre_del_producto);
          //console.log(doc.id, " => ", doc.data().Precio);
          //console.log(doc.id, " => ", doc.data().Productos_Disponibles);
          validacion = true;
        });
        if (validacion == false) {
          swal(
            "Lo sentimos",
            "Pero este dato parece que no existe en nuestra base de datos",
            "error"
          );
        } else {
          document.getElementById("boton").style = "display:none";
          document.getElementById("boton2").style = "display:block";
        }
      });
    db.collection("PRODUCTS")
      .where("Nombre_del_producto", "==", value)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tabla.innerHTML = `
            <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
            </tr>
            `;
          //console.log(doc.id, " => ", doc.data().Id);
          //console.log(doc.id, " => ", doc.data().Nombre_del_producto);
          //console.log(doc.id, " => ", doc.data().Precio);
          //console.log(doc.id, " => ", doc.data().Productos_Disponibles);
          validacion = true;
        });
        if (validacion == false) {
          swal(
            "Lo sentimos",
            "Pero este dato parece que no existe en nuestra base de datos",
            "error"
          );
        } else {
          document.getElementById("boton").style = "display:none";
          document.getElementById("boton2").style = "display:block";
        }
      });
  } else {
    swal("", "Debes poner el dato que deseas buscar", "warning");
  }
}
function Regresar() {
  //LEER DOCUMENTOS
  db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
        </tr>
        `;
    });
  });
  document.getElementById("boton2").style = "display:none";
  document.getElementById("boton").style = "display:block";
}

const botonproducto = document.getElementById("btnproducto");
botonproducto.addEventListener("click", (e) => {
  elemento = document.getElementById("arriba");
  elemento2 = document.getElementById("abajo");
  if (elemento2.style.display == "inline") {
    elemento2.style.display = "none";
    elemento.style.display = "inline";
  } else {
    elemento.style.display = "none";
    elemento2.style.display = "inline";
  }
});

const btnprecio = document.getElementById("btnprecio");
btnprecio.addEventListener("click", (e) => {
  elemento = document.getElementById("arriba3");
  elemento2 = document.getElementById("abajo3");
  if (elemento2.style.display == "inline") {
    elemento2.style.display = "none";
    elemento.style.display = "inline";
  } else {
    elemento.style.display = "none";
    elemento2.style.display = "inline";
  }
});
const btnid = document.getElementById("btnid");
btnid.addEventListener("click", (e) => {
  elemento = document.getElementById("arriba2");
  elemento2 = document.getElementById("abajo2");
  if (elemento2.style.display == "inline") {
    elemento2.style.display = "none";
    elemento.style.display = "inline";
  } else {
    elemento.style.display = "none";
    elemento2.style.display = "inline";
  }
});
const btncant = document.getElementById("btncant");
btncant.addEventListener("click", (e) => {
  elemento = document.getElementById("arriba4");
  elemento2 = document.getElementById("abajo4");
  if (elemento2.style.display == "inline") {
    elemento2.style.display = "none";
    elemento.style.display = "inline";
  } else {
    elemento.style.display = "none";
    elemento2.style.display = "inline";
  }
});

function permite(elEvento, permitidos) {
  // Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
  var caracteresMAY = " ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var caracteresMIN = " abcdefghijklmnñopqrstuvwxyz";
  var caracteresMIN_num = " 0123456789abcdefghijklmnñopqrstuvwxyz";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];
  // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha

  // Seleccionar los caracteres a partir del parámetro de la función
  switch (permitidos) {
    case "num":
      permitidos = numeros;
      break;
    case "car-min":
      permitidos = caracteresMIN;
      break;
    case "car-min-num":
      permitidos = caracteresMIN_num;
      break;
    case "car-may":
      permitidos = caracteresMAY;
      break;
    case "num_car":
      permitidos = numeros_caracteres;
      break;
  }

  // Obtener la tecla pulsada
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter);

  // Comprobar si la tecla pulsada es alguna de las teclas especiales
  // (teclas de borrado y flechas horizontales)
  var tecla_especial = false;
  for (var i in teclas_especiales) {
    if (codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
