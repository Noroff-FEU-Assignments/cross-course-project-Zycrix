import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
import {apiCall as apiCall} from "./apiCall.js";

const product = document.querySelectorAll(".product");
const tbd = 6;    //To be displayed

//Display the jackets marked for highlighting
function bestSellers(data){

  const regEx = /(?:<\/p>)|(?:<p>)/g;

  for(let i = 0; i < tbd; i++){

    //Remove the html tags included in the api result for description
    let desc = data[i].description.replaceAll(regEx, "");

    product[i].innerHTML = `
    <div class="overlay-container">  
    <a href="product.html?id=${data[i].sku}"><img src=${data[i].attributes[2].options[0]} alt="${desc}" class="product-img"></a>
    <span class="material-icons icon">favorite</span>
   </div>
   <h3>${data[i].name}</h3>
   <p>${data[i].price}$</p>
   `;
  };
};

//Get jackets array from the api call function 
const jackets = await apiCall();

//Filter the jackets array and store all jackets with an attribute of "highlight" set to "true"
let newJackets = jackets.filter(function (jackets){
  return jackets.attributes[0].options[0] === "true";
});

//Call the remaining functions
bestSellers(newJackets);
menu();
cartItems();