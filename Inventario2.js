var tabla = document.getElementById('Tabla');
  //LEER DOCUMENTOS
       db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
       tabla.innerHTML='';
       querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
        </tr>
        `
    });
});

function Buscador(){
    const value = document.getElementById('ID').value;
    if(value !=''){
    let validacion = false;
    db.collection("PRODUCTS").where("Id", "==", value).onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tabla.innerHTML = `
            <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
            </tr>
            `
            //console.log(doc.id, " => ", doc.data().Id);
            //console.log(doc.id, " => ", doc.data().Nombre_del_producto);
            //console.log(doc.id, " => ", doc.data().Precio);
            //console.log(doc.id, " => ", doc.data().Productos_Disponibles);
            validacion = true;
        })
        if(validacion == false){
            swal("Lo sentimos","Pero este dato parece que no existe en nuestra base de datos","error");
        } else {
            document.getElementById('boton').style="display:none";
            document.getElementById('boton2').style="display:block";
        }
    })
    db.collection("PRODUCTS").where("Nombre_del_producto", "==", value).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tabla.innerHTML = `
            <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
            </tr>
            `
            //console.log(doc.id, " => ", doc.data().Id);
            //console.log(doc.id, " => ", doc.data().Nombre_del_producto);
            //console.log(doc.id, " => ", doc.data().Precio);
            //console.log(doc.id, " => ", doc.data().Productos_Disponibles);
            validacion = true;
        })
        if(validacion == false){
            swal("Lo sentimos","Pero este dato parece que no existe en nuestra base de datos","error");
        } else {
            document.getElementById('boton').style="display:none";
            document.getElementById('boton2').style="display:block";
        }
    })
    } else{
        swal("","Debes poner el dato que deseas buscar","warning");
    }
    
}
function Regresar(){
    //LEER DOCUMENTOS
       db.collection("PRODUCTS").onSnapshot((querySnapshot) => {
       tabla.innerHTML='';
       querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.data().Id}</th>
            <td>${doc.data().Nombre_del_producto}</td>
            <td>${doc.data().Precio}</td>
            <td>${doc.data().Productos_Disponibles}</td>       
        </tr>
        `
        });
    });
    document.getElementById('boton2').style="display:none";
    document.getElementById('boton').style="display:block";
}