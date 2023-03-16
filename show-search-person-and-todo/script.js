
const userCards = document.querySelector('.show-user')

async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
   const data = await response.json()

   let newData = data.slice(0,4)

   newData.forEach(user => {
        userCards.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.email}</p>
                </div>
            </div>
            `   
   document.querySelector('.btn1').disabled = true
   });
}


const searchEl = document.getElementById('search')
const singleUserEl = document.querySelector('.search-user')

async function searchUser(searchInput) {
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${searchInput}`)
    const data = await response.json()

    singleUserEl.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[0].name}</h5>
                <p class="card-text">${data[0].email}</p>
            </div>
        </div>
    `
}

function getSingleUser() {

    // let input = searchEl.value
    // input.forEach(searchUser)

    // function searchUser(){
    //     searchUser(input)
    // }

    let input = searchEl.value
    searchUser(input)
    
    for (let i = searchEl.length; i > 0; i--) 
        { searchEl.pop(); }   
}

// var input = document.getElementById("search");

// input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {

//     event.getSingleUser();
//     document.getElementById("btn2").click();
//   }
// });

const addBtn = document.querySelector('#add-btn')
const showBtn = document.querySelector('#show-btn')

to_do_list = []

// Hafızayı temzileme çabaları
// function functionName()
// {
//     $("#show-btn").val("");
// }

function addlist() {
    let listelement = document.getElementById('to-do-list').value

    to_do_list.push(listelement)
    document.getElementById('to-do-list').value = ''

    console.log(...to_do_list)
}

function showlist() {
    let add_to_do_list = document.querySelector('.todolist')

    for(j in to_do_list) {
        add_to_do_list.innerHTML += `
        <div>${to_do_list[j]}</div>
        `
    
    }
    
}


const photoContainer = document.querySelector('.photo-container')

async function showPhoto() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const photos = await response.json()

  let newPhotos = photos.slice(0,4)

  newPhotos.forEach((photo)=> {
   photoContainer.innerHTML += `
   
  <img style="width:200px;" src="${photo.url}" alt="">
   `
   document.querySelector('.btn3').disabled = true
  })
}
