import {jackets as jackets} from "./data.js";
import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

//Target HTML elements
const cta = document.querySelector(".cta");
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
  let key = jackets[productId].name;
  let value = jackets[productId].id;

  let existing = window.sessionStorage.getItem(key);

  if(!existing){
    window.sessionStorage.setItem(key, value);
  };
  cta.classList.add("success");
  button.style.marginBottom = "1rem";
  cartItems();
};

createHtml(product);

button.onclick = addToCart;

menu();

cartItems();
