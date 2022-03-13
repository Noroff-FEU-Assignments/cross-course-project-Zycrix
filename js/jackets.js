import { jackets as jackets } from "./data.js";

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

  if (event.path[0].className === "men") {
    gender = displayMale;
  }
  else {
    gender = displayFemale;
  };

  createHtml(gender);
};


//Call the function

men.addEventListener("click", genderFilter);

women.addEventListener("click", genderFilter);

createHtml(mainDisplay);