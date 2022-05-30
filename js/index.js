import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
import {apiCall as apiCall} from "./apiCall.js";
import { bestSellers as bestSellers } from "./highlight.js";

const tbd = 6;    //To be displayed

//Get jackets array from the api call function 
const jackets = await apiCall();

//Filter the jackets array and store all jackets with an attribute of "highlight" set to "true"
let newJackets = jackets.filter(function (jackets){
  return jackets.attributes[0].options[0] === "true";
});

//Call the remaining functions
bestSellers(newJackets.reverse(), tbd);
menu();
cartItems();