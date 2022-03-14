const select = document.querySelector("select");
const shippingPrice = document.querySelector(".s_cost");
const totalPrice = document.querySelector(".t_cost");
const totalItems = window.sessionStorage.getItem("total");
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

