import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

const select = document.querySelector("select");
const shippingPrice = document.querySelector(".s_cost");
const totalPrice = document.querySelector(".t_cost");
const totalItems = window.sessionStorage.getItem("total");
const placeOrder = document.querySelector(".main-cta");

let shipping = "";


function shippingOption(){

  let value = select.value;

  if(value === "Standard shipping"){
    shipping = "5.00$";
    shippingPrice.innerText = shipping;
  }
  else{
    shipping = "10.00$";
    shippingPrice.innerText = shipping;
  }

  totalPrice.innerText = parseInt(totalItems) + parseInt(shipping) + ".00$";

  console.log(typeof totalItems);
}



shippingOption();



document.onload = shippingOption;
select.addEventListener("change", shippingOption);
placeOrder.addEventListener("click", ()=>window.sessionStorage.clear());

menu();
cartItems();
