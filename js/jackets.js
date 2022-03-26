import { jackets as jackets } from "./data.js";
import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

//Target HTML elements

const container = document.querySelector(".grid-container");
const men = document.querySelector(".men");
const women = document.querySelector(".women");

//Create new filtered arrays 

const mainDisplay = jackets.filter((jackets) => jackets.main === true);
const displayMale = jackets.filter((jackets) => jackets.gender === "male");
const displayFemale = jackets.filter((jackets) => jackets.gender === "female");

//Create HTML for the products to be displayed

function createHtml(data) {
  container.innerHTML = "";
  container.style.display = "grid";

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <div class="product">
	    <div class="overlay-container">  
		    <a href="product.html?id=${data[i].id}"><img src=${data[i].img} alt=${data[i].desc} class="product-img"></a>
        <span class="material-icons icon">favorite</span>
      </div>
      <h3>${data[i].name}</h3>
      <p>${data[i].price}</p>
    </div> 
    `;
  };
};

//Figure out what button was clicked and the call the createHTML function with the correct array

function genderFilter() {

  container.innerHTML = "";
  let gender;
  console.log(event);
  console.log(event.srcElement.className);

  if(event.srcElement.className.includes("women")){
    gender = displayFemale;
    women.classList.add("selected");
    men.classList.remove("selected");
  }
  else if (event.srcElement.className.includes("men")) {
    gender = displayMale;
    men.classList.add("selected");
    women.classList.remove("selected");
  };

  createHtml(gender);
};


//Call the function

men.addEventListener("click", genderFilter);
men.addEventListener("mouseenter", ()=>men.classList.add("hover"));
men.addEventListener("mouseleave", ()=>men.classList.remove("hover"));

women.addEventListener("click", genderFilter);
women.addEventListener("mouseenter", ()=>women.classList.add("hover"));
women.addEventListener("mouseleave", ()=>women.classList.remove("hover"));

createHtml(mainDisplay);

menu();

cartItems();