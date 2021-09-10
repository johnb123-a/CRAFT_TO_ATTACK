

const taskForm = document.getElementById('task-form');
    
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
const Id2 = taskForm['ID'].text;
console.log(Id2);

function Buscador(){
    const Id = taskForm['ID'].value;
    

    if (Id != null){

        db.collection("PRODUCTS").where("Id", "==", Id).get()
        .then((querySnapshot) => {
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
        });
    
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);

    });
    }else {
       
    }
    
}