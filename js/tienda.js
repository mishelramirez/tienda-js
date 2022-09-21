const Clickbutton = document.querySelectorAll(".button")
//console.log(Clickbutton)
const tbody = document.querySelector(".tbody")
let carrito = []

Clickbutton.fotEach(btn => {
    btn.addEventListener("click", addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    //consoler.log(button)
    const item = button.closest(".card")
   // console.log(item)
    const itemTitle = item.quierySelector(".card-title").textContent;
    //console.log(itemTitle)
    const itemPrecio = item.quierySelector("precio").textContent;
    //console.log(itemPrecio)
    const itemImg = item.quierySelector("card-img-top").src;
   // console.log(img)
   const newCarrito = {
    title: itemTitle,
    precio: itemPrecio,
    img: itemImg,
    cantidad: 1 
   }

   addItemCarrito(newCarrito)
}

function addItemCarrito(newCarrito){

    

    carrito.push(newCarrito)
    renderCarrito()
}

function renderCarrito(){
    tbody.innerHTML = ""
    carrito.map(item =>{
        const tr = document.createElement("tr")
        tr.classList.add("ItemCarrito")
        const Content = ` <th scope="row">1</th>
        <td class="table__productos">
            <img src="${item.img}" alt="">
        <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio"><p>${item.precio}</p></td>
        <td class="table__cantidad">
          <input type="number" min="1" value=${item.cantidad}>
          <button class="delete btn btn-danget">x</button>
        </td>
        `
        tr.innertHTML = Content;
        tbody.append (tr)
    })
   // console.log(carrito)
}