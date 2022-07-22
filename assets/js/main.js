let shoppingCart = [];


// class Cart{
//     constructor(quantity,price,)
// }


let cardsContainer = document.getElementById("cards__container")
let shoppingContainer = document.getElementById("shopping__container")
let cartCounter = document.querySelector("#cart__counter")
let totalPrice = document.getElementById("total__price")

function showProducts() {
    stockProducts.forEach(item => {
        let div = document.createElement('div')
        div.className = '.product-rows col-md-4 d-flex justify-content-center my-3'
        div.innerHTML = `
            <div class="card text-center shadow-lg" style="width: 18rem;">
                <img src="${item.img}" class="card-img-top rounded zoom" alt="photo of the Colosseum in Rome">
                <div class="card-body">
                    <p class="card-title fs-5">${item.trip}</p>
                    <p class="card-text">${item.desc}</p>
                    <p class="card-text">$${item.price}</p>
                    <button id="btn${item.id}" type="submit" class="btnBuy btn btn-train fw-bold"">BUY</button>
                </div>
            </div>
    `
        cardsContainer.appendChild(div)
        let button = document.getElementById(`btn${item.id}`)
        button.addEventListener("click", () => {
            addCart(item.id)
        })
    })
}

showProducts()

// function addcart(e){
//     btnFinded = e.target
//     btn.parentElement.parentElement
//     console.log(btn.parentElement.parentElement);
// }
function addCart(id) {
    let finded = stockProducts.find(e=>e.id === id)
    let exist = shoppingCart.includes(finded)
    // console.log(finded);
    if(exist){
        finded.quantityProd += 1
        finded.price = finded.price * finded.quantityProd
        console.log(finded.quantityProd)
        console.log(shoppingCart);
        }else{
            shoppingCart.push(finded)
            console.log(shoppingCart)
        }
    showShoppingCart()
    // console.log(shoppingCart);
    // let finded = stockProducts.find(e => e.id === id)
    // let exist = shoppingCart.find(e => e.id === id)
    // console.log(exist);
    // if (exist) {
    //     exist.quantityProd + 1
    // }
    // else {
    //     shoppingCart.push(finded)
    // }
    // showShoppingCart()
}


function showShoppingCart() {
    shoppingContainer.innerHTML =''
    for (const product of shoppingCart) {
        let div = document.createElement('div')
        div.className = 'productCart d-flex justify-content-between border-start border-4 border-danger bg-gray rounded-1  my-1 py-2 px-1'
        div.innerHTML += `
                    <p class="my-auto">${product.trip}</p>
                    <p class="my-auto">$${product.price}</p>
                    <p id='quantity__counter' class="my-auto">${product.quantityProd}</p>
                    <button class='btn-remove btn btn-train fw-bold'>X</button>
    `
    shoppingContainer.appendChild(div)
    let removeProduct = div.querySelectorAll('.btn-remove')
    for (let button of removeProduct) {
        button.addEventListener('click', removeElement)
        }
    }
    updateCart()
}

function updateCart() {
    let quantity = document.querySelectorAll('#shopping__container > div')
    cartCounter.innerText = quantity.length
    uptateTotal()
}

function removeElement(e) {
    btn = e.target
    let padre = btn.parentElement
    padre.remove()
    shoppingCart.splice(e,1)
    uptateTotal()
    updateCart()
}

function uptateTotal() {
    totalPrice.innerText = shoppingCart.reduce((acc, el) => acc + el.price, 0)
}