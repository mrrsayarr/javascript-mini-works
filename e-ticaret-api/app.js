/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<p class="card-text">${product.description}</p>

    <div class="card" style="width: 16rem;" onclick="showItem()">
      <img class="card-img-top"   src="${product.image}" alt="Card image cap"  title="${product.description}">
      <div class="card-body">
        <h5 class="card-title" title="${product.title}"  onclick="showItem()">${product.title}</h5>
        <h1 class="card-price" title="${product.price} TL">${product.price}₺</h1>
        <a class="card-button btn-info d-flex justify-content-center" href="#">Add to Cart</a>
      </div>
    </div>
*/

const baseURL = 'https://fakestoreapi.com/'

const categoriesEl = document.querySelector('.categories')
const productsEl = document.querySelector('.products')


// Methods Categories
async function getCategories () {
  let result = await fetch(`${baseURL}products/categories`)
  let categories = await result.json()

  categories.forEach((category) => {
    categoriesEl.innerHTML += `
    <div class="category"  href="item.html">
      <a href="item.html"  style="color:#FFFFFF">${category}</a>
    </div>
    `
  })
}


//SPESIFIC CATEGORY PRODUCT----------------------------------------------------------------ÇALIŞMIYOR---ÇALIŞMIYOR
async function getSingleProduct () {
  let result = await fetch(`${baseURL}products/categories/${category}`) 
  let products = await result.json()

  let newProducts = products.slice(0,10)
  console.log(newProducts)

  newProducts.forEach((product) => {
   productsEl.innerHTML += `
      <div class="card" style="width: 16rem;">
        <div class="container-img-top">
           <img class="card-img-top"  src="${product.image}" alt="product-image">
           <div class="overlay-text">
              <div class="text">${product.description}</div>
           </div>
      </div>
      <div class="card-body">
        <h5 class="card-title"  title="${product.title}"  >${product.title}</h5>
        <h1 class="card-price" title="${product.price} TL">${product.price}₺</h1>
            <div class="d-flex justify-content-center">
              <a class="btn-info btn text-white" onclick="#" href="" >Add to Cart</a>
            </div>
      </div>
    </div>
    
    `
    //<h5 class="card-title" title="${product.title}">${product.title}</h5> burdaki title mouse tutunca gözükmesini sağlar.
  })
} 
// value="${category}"

async function getAllProducts () {
  let result = await fetch(`${baseURL}products/`) 
  let products = await result.json()

  let newProducts = products.slice(0,50)
  console.log(newProducts)

  newProducts.forEach((product) => {
   productsEl.innerHTML += `
      <div class="card" style="width: 16rem;">
        <div class="container-img-top">
           <img class="card-img-top"  src="${product.image}" alt="product-image">
           <div class="overlay-text">
              <div class="text">${product.description}</div>
           </div>
      </div>
      <div class="card-body">
        <h5 class="card-title"  title="${product.title}"  >${product.title}</h5>
        <h1 class="card-price" title="${product.price} TL">${product.price}₺</h1>
            <div class="d-flex justify-content-center">
              <a class="btn-info btn text-white" onclick="#" href="" >Add to Cart</a>
            </div>
      </div>
    </div>
    
    `
    //<h5 class="card-title" title="${product.title}">${product.title}</h5> burdaki title mouse tutunca gözükmesini sağlar.
  })
} 



//METHODS
getAllProducts()
getCategories()
//getCategory()

// GET SPESIFIC CATEGORY------------------------------------------ÇALIŞMIYOR
async function getCategory () {
  let result = await fetch(`${baseURL}products/category`)
  let categories = await result.json()

  categories.forEach((category) => {
    categoriesEl.innerHTML += 
    `
    <div class="category" value="${categories.title}">
      ${category}
    </div>
    `
    console.log(category)

  })
}

/*
//BOŞTA    <<<<>>>>   "ÇALIŞMIYOR"------------------------------------------ÇALIŞMIYOR
function myFunction(x) {
  x.classList.toggle("change");
}
*/

// TOGGLE BAR ----------------------------------------------------------
const categoryBtn = document.querySelector('.container-category-btn')
const sideBar = document.querySelector('.sidebar')

function toggleSideBar() {
  // let display = window.getComputedStyle(sidebar).display
  // console.log(display)
  document.getElementById("sidebar").style.width = "250px";
  
  window.addEventListener('click', function(e){   
    if (!document.getElementById('sidebar').contains(e.target) && !document.getElementById('container-category-btn').contains(e.target))
    {
      document.getElementById("sidebar").style.width = "0px";
    } 
    else
    {
      // document.getElementById("sidebar").style.width = "0px";
    }})
      /*
      if(display == 'none') {
        sideBar.style.display = 'flex'
      }
      else if (display == 'flex') {
        sideBar.style.display = 'none'
      }
      */
} 

 
function showItem() { }


//ADD BUTTON and SHOP LİST--------------------------------------------------------------------------------------------ÇALIŞMIYOR
const card = document.getElementsByClassName("card");           //JS
const btnAdd = document.getElementsByClassName("btn-info");     //JS
const btnCart = document.querySelector(".btn-cart");            //HTML
const cartList = document.querySelector(".shopping-cart-list"); //HTML

class Shopping{
    constructor(title,price,image){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI{

    addToCart(shopping){
        const listItem = document.createElement("card");
        listItem.classList = "list-item";
        console.log(shopping.title)

        listItem.innerHTML  = 
        `
        <div class="row align-items-center text-white-50">

            <div class="col-md-3">
                <img src="${shopping.image}" alt="product" class="img-fluid">
            </div>

            <div class="col-md-5">
                <div class="title">${shopping.title}</div>
            </div>

            <div class="col-md-2">
                <div class="price">${shopping.price}</div>
            </div>

            <div class="col-md-2">
                <button class="btn btn-delete">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>

        </div>
        `
        cartList.appendChild(listItem);
        
    }

    removeCart(){
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function(){
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
            })
            
        }
    }

    cartCount(){
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }

    cartToggle(){
        btnCart.addEventListener("click", function(){
            cartList.classList.toggle("d-none");
        })
    }
    
}

for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function(e){
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("card-price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "In Card";
        let shopping = new Shopping(title,price,image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart()
        ui.cartCount();


        e.preventDefault();
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    let ui = new UI();

    ui.cartToggle();
})