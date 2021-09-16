const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row" class="table__num" ><img src=${item.img}  alt=""></th>
            <td class="table__productos">
          
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"<p><br>${item.precio}</p></td>
            <td class="table__cantidad">
             <br><input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button id="basura" class="delete btn"><i class="fas fa-trash-alt"></i></button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

var Dict= {
  "TrMdRS3108":1,
  "YeRaNIeR831":2,
  "CrafTTOattacK452":3,
  "SlMnS331":4,
  "BgRe98":5,
}
var cup=0;
var cup2=0;
var lifes=3;

var global=null;
var cont=null;

const itemCartTotal = document.querySelector('.itemCartTotal')

function CarritoTotal(){
  let Total = 0;
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("COP", ''))
    Total = Total + precio*item.cantidad
    global=Total;
  })

  itemCartTotal.innerHTML = `Total COP ${Total}`
  addLocalStorage()
  if(Total != 0){
    document.getElementById('BTN_COMPRAR').style.display='inline';
  }else{
    document.getElementById('BTN_COMPRAR').style.display='none';
  }
}
var cont=0;
var opc=0;
function validacioncupones(){

  const cupon = document.querySelector('#Textcupon').value
  for (var i in Dict){
    if(cupon== i){
       index= Dict[i]
      do{
        switch (index) {
        case 1:
      
           Descuento= global*0.1;
           TotalD =  global-Descuento
           itemCartTotal.innerHTML = `Total COP ${TotalD}`
           addLocalStorage()
           swal("Good job!", "Descuento del 10% aplicado!", "success");
           variable2.innerHTML = `Total COP ${TotalD}`
           plata.innerHTML = `Total COP ${TotalD}`
          break;
        case 2:
           Descuento=  global*0.12;
           TotalD =  global-Descuento
           itemCartTotal.innerHTML = `Total COP ${TotalD}`
           addLocalStorage()
           swal("Good job!", "Descuento del 12% aplicado!", "success");
           variable2.innerHTML = `Total COP ${TotalD}`
           plata.innerHTML = `Total COP ${TotalD}`
          break;
      
        case 3:
           Descuento= global*0.08
           TotalD =  global-Descuento
           itemCartTotal.innerHTML = `Total COP ${TotalD}`
           addLocalStorage()
           swal("Good job!", "Descuento del 8% aplicado!", "success");
           variable2.innerHTML = `Total COP ${TotalD}`
           plata.innerHTML = `Total COP ${TotalD}`
          break;
        case 4:
           Descuento= global*0.05
           TotalD = global-Descuento
           itemCartTotal.innerHTML = `Total COP ${TotalD}`
           addLocalStorage()
           swal("Good job!", "Descuento del 5% aplicado!", "success");
           variable2.innerHTML = `Total COP ${TotalD}`
           plata.innerHTML = `Total COP ${TotalD}`
        
        case 5:
           Descuento=  global*0.03
           TotalD =  global-Descuento
           itemCartTotal.innerHTML = `Total COP ${TotalD}`
           addLocalStorage()
           swal("Good job!", "Descuento del 3% aplicado!", "success");
           variable2.innerHTML = `Total COP ${TotalD}`
           plata.innerHTML = `Total COP ${TotalD}`
        default:
          swal("Error", "Código inválido", "success");
        break;
        }
      }while(cont<3);
        
    }
  }
}


function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}
/* Esto hace qie ciando se actualice no se borre la informacion*/
/*window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}*/
function myfunction() {
  swal({
  title: "¿ESTAS SEGURO DE REALIZAR LA COMPRA?",
  text: "Elige una opción....",
  icon: "warning",
  
  buttons: true,
  dangerMode: true,
  })
  .then((willDelete) => {
  if (willDelete) {
    /*...*/
  } else {
   location.reload();
  }
});
}

function dirrecion(){
  swal("Escribe tu direccion:", {
    content: "input",
    })
    .then((value) => {
     swal(`Se enviara a: ${value}`,{
        buttons: {
          catch: {
            text: "Cambiar Direccion",
            value: "catch",
          },
          Validar: true,
        },
      }).then((value) => {
          switch (value) {
            case "Validar":
              swal(`Gracias por tu comprar`)
              setTimeout(function(){window.location.href="Tienda.html";},3000)
            break;
 
            case "catch":
              swal("Escribe tu direccion:", {
                content: "input",
              }).then((value) => {
                swal(`Gracias por tu comprar`)
                setTimeout(function(){window.location.href="Tienda.html";},3000)
              });
            break;
            }
      });
   });
}

function Base(){
  auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log('usuario logeado');
        const User = firebase.auth().currentUser;
        if (User !== null) {
           // The user object has basic properties such as display name, email, etc.
          const displayemail = User.email;
          //console.log(displayemail);
          if(displayemail == "barretodiazjohnalexander@gmail.com" || displayemail == "lizeth.leyva15@gmail.com" || displayemail == "xomita.arias@gmail.com"){
            setTimeout(function(){window.location.href="Inventarios.html";},1000)
          }else{
            setTimeout(function(){window.location.href="Inventario.html";},1000) 
          }
        
        }else {
          console.log('usuario no logeado');
        }
    } else {
     console.log('usuario no logeado');
      //
    }
  });
}