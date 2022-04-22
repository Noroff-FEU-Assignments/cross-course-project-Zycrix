export async function apiCall(){

  //Check if API results are stored
  if(!window.sessionStorage.getItem("jackets")){
    //Initial API call
    const apiUrl = "https://kmprojects.no/projects/rainyapi/wp-json/wc/v3/products?per_page=20&consumer_key=ck_b58b0f81026791f03fd7cbedda4ce35b69b9b18c&consumer_secret=cs_66f74945d722205a88a123de92fe74b6f2d1f113";

    const response = await fetch(apiUrl);
    const result = await response.json();

    //Make json out of the api result and store it in session storage
    const jackets = JSON.stringify(result);

    window.sessionStorage.setItem("jackets", jackets);
    console.log("Fetched from the API")
    return result;
  }
  else{
    //Get the stored json from local storage and convert it back to an array
    const stored = window.sessionStorage.getItem("jackets");
    const jackets = JSON.parse(stored);
    console.log("Retrieved from storage")
    return jackets;
  };
};