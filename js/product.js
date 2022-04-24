import {apiCall as apiCall} from "./apiCall.js";
import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

//Target HTML elements
const img = document.querySelector(".p-img");
const info = document.querySelector(".product-info");
const desc = document.querySelector(".desc");
const button = document.querySelector(".add-cart");
const browse = document.querySelector(".browse");
const toCart = document.querySelector(".to-cart");
const sizeSelect = document.querySelector(".size-select");


//Retrieve the querystring parameter
const queryString = document.location.search;
const search = new URLSearchParams(queryString);
const productIndex = search.get("id");
const productId = productIndex;

//Final product variable for html creation
const jackets = await apiCall();

const product = jackets.filter((jackets)=> jackets.sku === productId.toString()); //Another way i could've done this would be to fetch the product specific api endpoint using the id from the querystring but i chose to do it this way to reduce the number of api calls since my api call function stores the result in session storage this way seems to result in way better performance, even with a great internet connection retrieving the item from session storage is noticeably faster 

//Make some html
function createHtml (data){

  const regEx = /(?:<\/p>)|(?:<p>)/g;

  let description = data[0].description.replace(regEx, "");

  img.innerHTML = `<img src = "${data[0].images[0].src}" class = "product-image" alt = ${description}>`;
  info.innerHTML = `<h1>${data[0].name}</h1>
                    <h2>${data[0].price}.00$</h2>`;
  desc.innerHTML = `<p class = "product-description">${description}</p>`;
};


function addToCart(){
  const key = product[0].name;
  const value = product[0].sku;

  const sizeKey = product[0].name + " Size";
  const size = sizeSelect.value;

  let existing = window.sessionStorage.getItem(key);

  if(!existing){
    window.sessionStorage.setItem(key, value);
    window.sessionStorage.setItem(sizeKey, size);
  };
  browse.classList.add("added");
  toCart.classList.add("added");

  cartItems();
};

createHtml(product);

button.onclick = addToCart;

menu();

toCart.addEventListener("click", ()=>window.location.href = window.location.origin + "/cart.html");

browse.addEventListener("click", ()=>{
  window.location.href = window.location.origin + "/jackets.html";
  window.sessionStorage.setItem("origin", "cartBack");
});

cartItems();

