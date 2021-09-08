

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const title = taskForm['task-title'].value;
    const description = taskForm['task-description'].value;
    
    //Esta peticion es asincrona
    const response =await db.collection("users").add({
    title: title,
    description: description
    })
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
    });
    console.log(response);
    console.log(title, description);
})