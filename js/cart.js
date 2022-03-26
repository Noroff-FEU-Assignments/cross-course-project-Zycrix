import {jackets as jackets} from "./data.js";
import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

const container = document.querySelector(".product-container");

//Get items from session storage
function getItems(data){

  let productArray = [];
  
  for(let i = 0; i < data.length; i++){
    
    let item;

    try{
      item = window.sessionStorage.getItem(data[i].name)
      
      if(item){
        productArray.push(data[Number(item) - 1]);
      };
    }
    catch{
      continue;
    };
  };
  return productArray;
};

//Create html with cart array
function createHtml(data){
  
  //Cart lsit
  for(let i = 0; i < data.length; i++){

    container.innerHTML += `      
    <div class="cart_container">
    <a href="product.html?id=${data[i].id}"><img src=${data[i].img} class="product_img" alt=${data[i].desc}></a>
    <p class=cart_product>${data[i].name}</p>
    <p class="product_size">xs</p>
    <p class="product_price">${data[i].price}</p>
    <p class ="remove" data-id = ${data[i].id}>X</p>
  </div>`
  };

  //Adding remove buttons to the cart items
  const remove = document.querySelectorAll(".remove");

  for(let i = 0; i < remove.length; i++){
    remove[i].style.color = "red";
    remove[i].style.cursor = "pointer";
  };

  //Calculating the total price of cart items
  const price = document.querySelectorAll(".product_price");
  let total = 0;
  const totalContainer =  document.querySelectorAll(".total_price");

  for(let i = 0; i < price.length; i++){
    total += parseInt(price[i].innerText);
  };

  total.toString();
  total += ".00$";

  for(let i = 0; i < totalContainer.length; i++){
    totalContainer[i].innerText = total;
  };
  
  window.sessionStorage.setItem("total", total);
};

//Create the cart array
let productArray = getItems(jackets);

//Initial html creation call
createHtml(productArray);

//Add eventListener to the remove buttons
const remove = document.querySelectorAll(".remove");

for(let i = 0; i<remove.length; i++){
  remove[i].addEventListener("click", removeItem)
}

function removeItem(){

  const target = event.target.dataset.id;
  const name = jackets[target - 1].name;

  window.sessionStorage.removeItem(name);
  window.location.reload();
  let newArray = productArray.filter((productArray)=>productArray.id !== Number(target))
};

menu();
cartItems();

















