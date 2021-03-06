import {apiCall as apiCall} from "./apiCall.js";
const jackets = await apiCall();

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
    try{
      const counter = document.querySelector(".counter");
      counter.classList.remove("counter");
    }
    catch(e){
      //Just adding this try/catch statement because i got an error when trying to remove the counter class while the counter was not active.
    };
  };
};