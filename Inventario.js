

const taskForm = document.getElementById('task-form');

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
     document.getElementById('ID').value ='';
     document.getElementById('PRODUCTO').value ='';
     document.getElementById('PRECIO').value ='';
     document.getElementById('CANTIDAD').value ='';
    }).catch((error) => {
    console.error("Error adding document: ", error);
    });
    taskForm.reset();
    
}

var tabla = document.getElementById('Tabla');
//LEER DOCUMENTOS
db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.data().Id}</th>
            <td style="display:none">${doc.id} </td>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>
            <td> <button id="btn_Edit" onclick="editar('${doc.id}','${doc.data().Nombre_del_producto}','${doc.data().Precio}','${doc.data().Productos_Disponibles}')" class="btn"><b>EDITAR</b></button> </td>
            <td> <button id="btn_Delete" onclick="eliminar('${doc.id}')" class="btn btn-sm px-4 pt-3 pb-2"> <i class="fas fa-times"></i> </button></td>     
        </tr>
        `
    });
});

//BORRAR DOCUMENTOS
function eliminar(id){
    swal({
       title: "Estas Seguro?",
       text: "Una vez Eliminado, No podras recuperar este producto",
       icon: "warning",
       buttons: true,
       dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        db.collection("PRODUCTS").doc(id).delete().then(() => {
         swal("Producto borrado con exito", {
         icon: "success",
        }).catch((error) => {
         console.error("Error removing document: ", error);
        });
        
    });
    } else {
      swal("Cancelado","Producto asegurado","error")
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
    })
    .then(() => {
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
    
    })
    .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
    });

  }
}
