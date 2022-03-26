import {jackets as jackets} from "./data.js";
export function cartItems(){
  const itemsStored = Object.keys(sessionStorage);
  const cart = document.querySelector(".cart");

  const find = itemsStored.filter((element)=>{

    for(let i = 0; i < jackets.length; i++){
      if(element === jackets[i].name){
        return true;
      };
    };
  });

  const numberOfItems = find.length;

  if(numberOfItems > 0){
    cart.innerHTML += `<em class = "counter">${numberOfItems}</em>`;
  }
  else{
    const counter = document.querySelector(".counter");
    counter.classList.remove("counter");
  };
};