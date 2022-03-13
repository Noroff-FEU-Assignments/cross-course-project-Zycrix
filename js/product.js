import {jackets as jackets} from "./data.js";
// import {test as test} from "./tst.js";
let test = [
  {
    name: "kristoffer",
    age: 23, 
    alive: true
  },{
    name: "tore",
    age: 50,
    alive: false
  }
];

console.log(test);

test = new {name: "hei", age: 10, alive: true}

console.log(test + " asdasdas");

//Target HTML elements
const mainContainer = document.querySelector(".main-container");
const img = document.querySelector(".p-img");
const info = document.querySelector(".product-info");
const desc = document.querySelector(".desc");
const button = document.querySelector("button");

//Retrieve the querystring parameter
const queryString = document.location.search;
const search = new URLSearchParams(queryString);
const productIndex = search.get("id");
const productId = productIndex - 1;

//Final product variable for html creation
const product = jackets[productId];

function createHtml (data){
  img.innerHTML = `<img src = ${data.img} class = "product-image" alt = ${data.desc}>`;
  info.innerHTML = `<h1>${data.name}</h1>
                    <h2>${data.price}</h2>`;
  desc.innerHTML = `<p class = "product-description">${data.desc}</p>`;
};


function addToCart(){
  let key = jackets[productIndex].name;
  let value = jackets[productId].id;

  let existing = window.sessionStorage.getItem(key);

  if(!existing){
    window.sessionStorage.setItem(key, value);
    console.log(window.sessionStorage.getItem(key));
  }
  else{
    console.log(typeof window.sessionStorage.getItem(key));
    let num = Number(existing);
    console.log(typeof num);
  }
}

console.log(jackets[productId]);
createHtml(product);

button.onclick = addToCart;

