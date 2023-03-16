


const baseURL = 'https://fakestoreapi.com/'

const categoriesEl = document.querySelector('.categories')
const productsEl = document.querySelector('.products')

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


async function getProduct () {
    let result = await fetch(`${baseURL}products/jewelery`) 
    let jewelery = await result.json()
  
    let newjewelery = jewelery.slice(0,50)
    console.log(newjewelery)
  
    newjewelery.forEach((product) => {
     productsEl.innerHTML += `
        <div class="title">
            <title>${jewelery.title}</title>
        </div>
        <title>${jewelery.title}</title>
      
      `
      //<h5 class="card-title" title="${product.title}">${product.title}</h5> burdaki title mouse tutunca gözükmesini sağlar.
    })
  } 
  
  
  //METHODS
  getProduct()
  getCategory()


  ////////////////////////////////////////////

const categoryBtn = document.querySelector('.container-category-btn')
const sideBar = document.querySelector('.sidebar')

function toggleSideBar() {
  // let display = window.getComputedStyle(sidebar).display
  // console.log(display)
  document.getElementById("sidebar").style.width = "250px";
  
  window.addEventListener('click', function(e){   
    if (!document.getElementById('sidebar').contains(e.target) && 
        !document.getElementById('container-category-btn').contains(e.target))
    {
      document.getElementById("sidebar").style.width = "0px";
    } 
    else {}
    })
} 
