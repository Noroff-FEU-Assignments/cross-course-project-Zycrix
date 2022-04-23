export function bestSellers(data, tbd){

  const product = document.querySelectorAll(".product");
  const regEx = /(?:<\/p>)|(?:<p>)/g;

  for(let i = 0; i < tbd; i++){

    //Remove the html tags included in the api result for description
    let desc = data[i].description.replaceAll(regEx, "");

    product[i].innerHTML = `
    <div class="overlay-container">  
      <a href="product.html?id=${data[i].sku}"><img src=${data[i].attributes[2].options[0]} alt="${desc}" class="product-img"></a>
      <span class="material-icons icon">favorite</span>
    </div>
    <h3>${data[i].name}</h3>
    <p>${data[i].price}.00$</p>
    `;
  };
};