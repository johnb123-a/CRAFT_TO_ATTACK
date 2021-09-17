

const taskForm = document.getElementById('task-form');
function Verificar(){
  const Id =document.getElementById('ID').value;
  const Producto = document.getElementById('PRODUCTO').value;
  db.collection("PRODUCTS").get().then((querySnapshot) => {
    let validar = false;
    let validar2 = false;
    querySnapshot.forEach((doc) => {
      var identificador =  `${doc.data().Id}`
      var identificador2 =  `${doc.data().Nombre_del_producto}`
      if (Id == identificador ){
        validar= true;  
      }else if (Producto == identificador2 ){
        validar2 = true;
      }
      });
    if (validar ==true || validar2 == true) {
      swal("OHH NO","No puedes poner este id o producto porque ya existe","error");
      console.log("Este id o producto ya existe en la base de datos");
    } else {
      guardar();
    }  
  })
}


function guardar(){
    const Id =document.getElementById('ID').value;
    const Producto = document.getElementById('PRODUCTO').value;
    const Precios = document.getElementById('PRECIO').value;
    const Cantidad = document.getElementById('CANTIDAD').value;
    
    db.collection("PRODUCTS").doc().set({
       Id: Id,
       Nombre_del_producto: Producto,
       Precio: Precios,
       Productos_Disponibles: Cantidad
      }).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
       console.error("Error adding document: ", error);
      });
}

var tabla = document.getElementById('Tabla');
db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        tabla.innerHTML += `
        <tr>
            <td scope="row">${doc.data().Id}</td>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>
            <td style="display:none">${doc.id} </td>
            <td> <button id="btn_Edit" onclick="editar('${doc.id}','${doc.data().Nombre_del_producto}','${doc.data().Precio}','${doc.data().Productos_Disponibles}')" class="btn"><b>EDITAR</b></button>  
            <button id="btn_Delete" onclick="eliminar('${doc.id}')" class="btn btn-sm"> <i class="fas fa-trash-alt"></i> </button> </td>
        </tr>
        `
    });
});

//BORRAR DOCUMENTOS
function eliminar(id){
   swal("¿Estas Seguro?","Una vez Eliminado, No podras recuperar este producto","warning",{
   buttons: {
    Cancelar: true,
    Confirmar: true,
  },
}).then((value) => {
  switch (value) {
    case "Confirmar":
      db.collection("PRODUCTS").doc(id).delete().then(() => {
          swal("Producto borrado con exito", {
           icon: "success",
          })
        })
      break;
    case "Cancelar":
      swal("","Haz cancelado la eliminacion de este producto","warning");
      break;
    default:
      swal("","Debes escoger una de las opciones","info");
  }
});
}

//ACTUALIZAR DOCUMENTOS
function editar (id,Producto, Precio, Cantidad){
  document.getElementById('id').style="display:none"
  document.getElementById('PRODUCTO').value = Producto;
  document.getElementById('PRECIO').value = Precio;
  document.getElementById('CANTIDAD').value = Cantidad;

  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';

    boton.onclick = function(){
      var washingtonRef = db.collection("PRODUCTS").doc(id);
      var Producto = document.getElementById('PRODUCTO').value;
      var Precio = document.getElementById('PRECIO').value;
      var Cantidad = document.getElementById('CANTIDAD').value;
      
       return washingtonRef.update({
        Nombre_del_producto: Producto,
        Precio: Precio,
        Productos_Disponibles: Cantidad
        }).then(() => {
         console.log("Document successfully updated!");
         document.getElementById('id').style="display:block"
         document.getElementById('ID').value ='';
         document.getElementById('PRODUCTO').value ='';
         document.getElementById('PRECIO').value ='';
         document.getElementById('CANTIDAD').value ='';
         boton.innerHTML = 'Guardar';
          boton.onclick = function(){
           const Id =document.getElementById('ID').value;
           const Producto = document.getElementById('PRODUCTO').value;
           const Precios = document.getElementById('PRECIO').value;
           const Cantidad = document.getElementById('CANTIDAD').value;
            db.collection("PRODUCTS").doc().set({
             Id: Id,
             Nombre_del_producto: Producto,
             Precio: Precios,
             Productos_Disponibles: Cantidad
            }).then((docRef) => {
             console.log("Document written with ID: ", docRef.id);
             document.getElementById('ID').value ='';
             document.getElementById('PRODUCTO').value ='';
             document.getElementById('PRECIO').value ='';
             document.getElementById('CANTIDAD').value ='';
            }).catch((error) => {
             console.error("Error adding document: ", error);
            });
            taskForm.reset();
          }
        }).catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
      }
}

const botonproducto = document.getElementById('btnproducto');
botonproducto.addEventListener('click', (e) => { 
  elemento = document.getElementById("arriba"); 
  elemento2 = document.getElementById("abajo"); 
  if(elemento2.style.display=="inline") 
    { 
    elemento2.style.display="none"; 
    elemento.style.display="inline"; 
    }else{
    elemento.style.display="none"; 
    elemento2.style.display="inline"; 
  }    
});

const btnprecio = document.getElementById('btnprecio');
btnprecio.addEventListener('click', (e) => { 
  elemento = document.getElementById("arriba3"); 
  elemento2 = document.getElementById("abajo3"); 
  if(elemento2.style.display=="inline") 
    { 
    elemento2.style.display="none"; 
    elemento.style.display="inline"; 
    }else{
    elemento.style.display="none"; 
    elemento2.style.display="inline"; 
  }    
});
const btnid = document.getElementById('btnid');
btnid.addEventListener('click', (e) => { 
  elemento = document.getElementById("arriba2"); 
  elemento2 = document.getElementById("abajo2"); 
  if(elemento2.style.display=="inline") 
    { 
    elemento2.style.display="none"; 
    elemento.style.display="inline"; 
    }else{
    elemento.style.display="none"; 
    elemento2.style.display="inline"; 
  }    
});
const btncant = document.getElementById('btncant');
btncant.addEventListener('click', (e) => { 
  elemento = document.getElementById("arriba4"); 
  elemento2 = document.getElementById("abajo4"); 
  if(elemento2.style.display=="inline") 
    { 
    elemento2.style.display="none"; 
    elemento.style.display="inline"; 
    }else{
    elemento.style.display="none"; 
    elemento2.style.display="inline"; 
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
  switch(permitidos) {
    case 'num':
      permitidos = numeros;
      break;
    case 'car-min':
      permitidos = caracteresMIN;
      break;
    case 'car-min-num':
      permitidos = caracteresMIN_num;
      break;
    case 'car-may':
      permitidos = caracteresMAY;
      break;
    case 'num_car':
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
  for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}

