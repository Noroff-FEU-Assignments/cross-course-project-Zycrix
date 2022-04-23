import {apiCall as apiCall} from "./apiCall.js";
import{menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";
const result = await apiCall();
const jackets = result.reverse(); //It was annoying looking at the page with the products in reverse order, not that it really matters for any of the code to function as expected i just liked the original ordering better.

//Target HTML elements

const container = document.querySelector(".grid-container");
const men = document.querySelector(".men");
const women = document.querySelector(".women");

//Create new filtered arrays 

const mainDisplay = jackets.filter((jackets) => jackets.attributes[1].options[0] === "true");
const displayMale = jackets.filter((jackets) => jackets.categories[0].name.toLowerCase() === "male");
const displayFemale = jackets.filter((jackets) => jackets.categories[0].name.toLowerCase() === "female");

//Create HTML for the products to be displayed

function createHtml(data) {
  container.innerHTML = "";
  container.style.display = "grid";

  const regEx = /(?:<\/p>)|(?:<p>)/g;

  for (let i = 0; i < data.length; i++) {
    
    let desc = data[i].description.replace(regEx, "");

    container.innerHTML += `
      <div class="product">
	      <div class="overlay-container">  
		      <a href="product.html?id=${data[i].sku}" class = "product-link"><img src=${data[i].attributes[2].options[0]} alt="${desc}" class="product-img"></a>
          <span class="material-icons icon">favorite</span>
        </div>
        <h3>${data[i].name}</h3>
        <p>${data[i].price}.00$</p>
      </div> 
    `;
  };
};

//Figure out what button was clicked and the call the createHTML function with the correct array

function genderFilter() {

  container.innerHTML = "";
  let gender;

  if(event.srcElement.className.includes("women")){
    if(women.className.includes("selected")){
      women.classList.remove("selected");
      return createHtml(mainDisplay);
    };
    gender = displayFemale;
    women.classList.add("selected");
    men.classList.remove("selected");
  }
  else if (event.srcElement.className.includes("men")) {
    if(men.className.includes("selected")){
      men.classList.remove("selected");
      return createHtml(mainDisplay);
    };
    gender = displayMale;
    men.classList.add("selected");
    women.classList.remove("selected");
  };

  createHtml(gender);
};

//Store scroll position

function storeScroll(){

  const scrollPosition = window.scrollY;
  window.sessionStorage.setItem("scrollPosition", scrollPosition);
};

//Use stored scroll position

function returnScroll(){

  const scrollPosition = window.sessionStorage.getItem("scrollPosition");
  const origin = window.sessionStorage.getItem("origin");

  if(origin === "cartBack"){
    window.scrollTo(0, scrollPosition);
    window.sessionStorage.removeItem("origin");    
  };
};

//Call the function

men.addEventListener("click", genderFilter);
men.addEventListener("mouseenter", ()=>men.classList.add("hover"));
men.addEventListener("mouseleave", ()=>men.classList.remove("hover"));

women.addEventListener("click", genderFilter);
women.addEventListener("mouseenter", ()=>women.classList.add("hover"));
women.addEventListener("mouseleave", ()=>women.classList.remove("hover"));

createHtml(mainDisplay);

window.addEventListener("scroll", storeScroll);

returnScroll();

menu();

cartItems();