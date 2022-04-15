import {jackets as jackets} from "./data.js";
import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
import {apiCall as apiCall} from "./apiCall.js";

const product = document.querySelectorAll(".product");
const tbd = 6;    //To be displayed

function bestSellers(data){

  for(let i = 0; i < tbd; i++){
    product[i].innerHTML = `
    <div class="overlay-container">  
    <a href="product.html?id=${data[i].id}"><img src=${data[i].img} alt=${data[i].desc} class="product-img"></a>
    <span class="material-icons icon">favorite</span>
   </div>
   <h3>${data[i].name}</h3>
   <p>${data[i].price}</p>
   `
  }
}

let newJackets = jackets.filter(function (jackets){
  return jackets.highlight === true;
})



bestSellers(newJackets);
menu();
cartItems();
apiCall();