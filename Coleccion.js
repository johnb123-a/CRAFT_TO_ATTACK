const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var Suguerencias = document.getElementById("Suguerencias").value;

  db.collection("POSTS")
    .doc()
    .set({
      Comentarios: Suguerencias,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      taskForm.reset();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
