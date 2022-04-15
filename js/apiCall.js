export async function apiCall(){
    const apiUrl = "https://kmprojects.no/projects/rainyapi/wp-json/wc/store/products";

    const response = await fetch(apiUrl);
    const result = await response.json();

    console.log(result);
};