import {apiCall as apiCall} from "./apiCall.js";
import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
const apiResults = await apiCall(); 
const jackets = apiResults.reverse();

const container = document.querySelector(".product-container");

//Get items from session storage
function getItems(data){

  let productArray = [];
  let sizeIndex = 0;  //Using a separate index to the for loop to only increment when a product is added to the new array
  let item;
  let itemSize;

  for(let i = 0; i < data.length; i++){

    try{

      item = window.sessionStorage.getItem(data[i].name); //Get product id from storage
      itemSize = window.sessionStorage.getItem(data[i].name + " Size"); //Get chosen size from storage
      
      if(item){
      
        productArray.push(data.find((jacket)=> jacket.sku == item)) //Find the product with the matching id from the api array
        productArray[sizeIndex].size = itemSize; //Add size attribute to the array from the stored chosen size 
        sizeIndex++;
      
      };
    }
    catch(e){

    };
  };

  return productArray; //Return a new array with the products from session storage
};

//Create html with cart array
function createHtml(data){
  
  // container.innerHTML = "";

  const regEx = /(?:<\/p>)|(?:<p>)/g;

  //Cart list
  for(let i = 0; i < data.length; i++){

    let desc = data[i].description.replace(regEx, ""); //Remove random html tags from the api result

    container.innerHTML += `      
    <div class="cart_container tst">
    <a href="product.html?id=${data[i].sku}"><img src=${data[i].attributes[2].options[0]} class="product_img" alt=${desc}></a>
    <p class=cart_product>${data[i].name}</p>
    <p class="product_size">${data[i].size}</p>
    <p class="product_price">${data[i].price}.00$</p>
    <p class ="remove" data-id = "${data[i].sku}">X</p>
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
  const anchor = document.querySelectorAll(".tst");
  
  for(let i = 0; i < anchor.length; i++){
    anchor[i].remove();
  }

  const target = event.target.dataset.id;
  const name = jackets[target - 1].name;
  console.log(name);
  console.log(target);
  //window.sessionStorage.removeItem(name);
  const newArray = productArray.filter((jacket)=> jacket.sku !== target)
  createHtml(newArray);
  console.log(newArray)
};

menu();
cartItems();

















