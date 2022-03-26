export function menu(){
const menu = document.querySelector(".burger-menu");
const list = document.querySelector(".list-container");
list.classList.add("hidden");

menu.addEventListener("click", ()=> {
  list.classList.toggle("hidden");
});
}







