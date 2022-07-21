let shoppingCart = [];

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
                    <button id="${item.id}" type="submit" class="btn btn-train fw-bold"">BUY</button>
                </div>
            </div>
    `
    cardsContainer.appendChild(div)
    let button = document.getElementById(`${item.id}`)
    button.addEventListener("click",()=>{
        addCart(item.id)
    })
    })
}

showProducts();

function addCart(id){
    let finded = stockProducts.find(e => e.id ===id)
    shoppingCart.push(finded)
    showShoppingCart()
}

function showShoppingCart(){
    let div = document.createElement('div')
    div.className = 'productCart d-flex justify-content-between border-start border-4 border-danger bg-gray rounded-1 my-2 py-2 px-1'
    for(const producto of shoppingCart){
        div.innerHTML = `
                    <p class="my-auto">${producto.trip}</p>
                    <p class="my-auto">$${producto.price}</p>
                    <p class="my-auto">${producto.quantityProd}</p>
                    <button class='btn-remove btn btn-train fw-bold'>X</button>
    `
    }
    shoppingContainer.appendChild(div)
    let removeProduct = div.querySelectorAll('.btn-remove')
    for(let button of removeProduct ){    
        button.addEventListener('click', removeElement)
    }
    updateCart()
}

function updateCart(){
    let quantity = document.querySelectorAll('#shopping__container > div')
    cartCounter.innerText = quantity.length
    totalPrice.innerText = shoppingCart.reduce((acc, el)=>acc + el.price, 0)
}

function removeElement(e){
    btn= e.target
    btn.parentElement.remove()
    updateCart()
}
