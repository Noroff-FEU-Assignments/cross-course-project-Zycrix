import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
import{bestSellers as bestSellers} from "./highlight.js";
import{apiCall as apiCall} from "./apiCall.js";
const jackets = await apiCall();

if(window.location.href === window.location.origin + "/succes.html"){
  try{
    
    //Filter the jackets array and store all jackets with an attribute of "highlight" set to "true"
    let newJackets = jackets.filter(function (jackets){
      return jackets.attributes[0].options[0] === "true";
    });

    bestSellers(newJackets.reverse(), 6);
  }
  catch(error){
    alert("There was an error retrieving the products. Pleases try reloading the page");
    window.sessionStorage.clear();
  };
};

menu();
cartItems();