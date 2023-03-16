/*
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${pokemonList[i].image}" alt="Card image cap">
        <div class="card-body">
             <h5 class="card-title">${pokemonList[i].name}</h5>
        </div>
    </div>
*/

const baseURL='https://pokeapi.co/api/v2/'
const pokemonsEl=document.querySelector('.pokedex')
const pokemonInput = document.getElementById('pokemon-input')


function addListToHtml(htmlElement,list){

    for(i=0;i<list.lenght;i++){
        htmlElement.innerHTML+=`
          <div class="card">

          </div>
       
        `;
    }
}

async function getAllPokemons(){

    let result= await fetch(`${baseURL}pokemon`);
    let data=await result.json();

   //  console.log(data);

    let showPokedex = data.results
    addListToHtml(data,showPokedex);
}

async function getPokemon(id){

    let response = await fetch(`${baseURL}pokemon/${id}`);
    let data = await response.json();

    //console.log(data);

    document.getElementById('pokedex').innerHTML+=`
        <div class="card">
            <img class="card-image" src="${data.sprites['front_default']}"/>     
            <h2 class="card-title">${data.name}</h2>
            <p>
                <small>Type:</small> ${data.types}</small>
            </p>
       </div>
       `
}

// SEARCH POKEMON
function searchPokemon() {

    let inputValueUpper = pokemonInput.value
    let inputValue = inputValueUpper.toUpperCase() + inputValueUpper.slice(1);

    getPokemon(inputValue)
}

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => i)
  
}

range(1,101).forEach(id => { getPokemon(id) })
 

// getAllPokemons();
// getPokemon('gastly');



































// const baseURL='https://pokeapi.co/api/v2/';
//  const pokemonsEl=document.querySelector('.container-pokemon')

//  function addListToHtml(htmlElement,list){

//      for(i=0;i<list.lenght;i++){
//          htmlElement.innerHTML+=`
//          <div>${list[i].name}</div>
//          document.getElementById('pokedex').innerHTML+=
//          <div>${data.results[i].name}</div>
         
         
//          `;
//      }
//  }


//  async function getAllPokemons(){
//      let res=await fetch(`${baseURL}pokemon`);
//      let data=await res.json();

//      let pokedex=data.results;

//      addListToHtml(pokemonsEl,pokedex);
//      console.log(data);
//  }

//  async function getPokemon(name){
//      let res=await fetch(`${baseURL}pokemon/${name}`);
//      let data=await res.json();
    
//      console.log(data);
//  }

 

//  getAllPokemons();
//  getPokemon('ditto');



/* ------------------------------------------------------------------------------------------------
// const pokemonInput = document.getElementById('pokemon-input')
// const pokemonList  = document.querySelector('.main-container')
// const searchPokemonList  = document.querySelector('.pokemon-input')
// const baseURL  = 'https://pokeapi.co/api/v2/'

// /*
// async function addPokemons (pokemon) {
//     document.querySelector('.container-pokemon').innerHTML += `${pokemon.name}`}
//                                                                                     */

// function addListHTML(htmlElement,pokemonData) {

    
//     for(i = 0; i < pokemonData.lenght ; i++) {

//         console.log(pokemonData[i])
        
//         htmlElement.innerHTML += `
//             <div class="card" style="width: 18rem;">
//                 <img class="card-img-top" src="${pokemonData[i].image}}" alt="Card image cap">
//                 <div class="card-body">
//                     <h5 class="card-title">${pokemonData[i].name}</h5>
//                 </div>
//             </div>
//         `
//     }

// }
// async function getPokemons() {
//     let response    = await fetch(`${baseURL}pokemon`)
//     let pokemonData = await response.json()

//     let pokedex = pokemonData.results;

//     addListHTML(pokemonList, pokedex)
// }

// async function singlePokemon(name) {
//     let only_response = await fetch(`${baseURL}pokemon/${name}`)
//     let only_data_add = await only_response.json()

//     addListHTML(searchPokemonList, only_data_add, name)
// }

// function searchPokemon() {
//     let inputValue = pokemonInput.value
//     singlePokemon(inputValue)
// }

// getPokemons()
// singlePokemon()




/* ----------------------------KENDIM UGRASTIGIM YERLER---------------------------- */
/*
const pokemonData = document.getElementById('select-pokemon')
const showPokemonList = document.querySelector('.container')

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'



function addListHtml (htmlElement, pokemonList)  {
    
    //Hata varsa çalışır
    if(pokemonList === undefined) {
        console.log("Undefined")
    }
    
    for(let i = 0; i < pokemonList.lenght; i++) {
    htmlElement.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${pokemonList[i].image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${pokemonList[i].name}</h5>
            </div>
        </div>
    `
    }
}

async function getPokemonAbilities() {
    let res = await fetch(`${baseURL}/id`)
    let PokeId = await res.json()
  
    console.log(PokeId)
  
    addListToHtml(showPokemonList, PokeId)
  } 

async function getPokemons() {
    let response = await fetch(`${baseURL}`)
    let data     = await response.json()

    console.log(data)

    addListHtml(showPokemonList, data)
}


getPokemonAbilities() 
getPokemons()
*/




