import {menu as menu} from "./menu.js";
import {cartItems as cartItems} from "./cartNumber.js";

const name = document.querySelector("#fullname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector(".main-cta");
const form = document.querySelector("form");
const nameError = document.querySelector(".name");
const emailError = document.querySelector(".email");
const messageError = document.querySelector(".message");
const section = document.querySelector("section");


function nameValidation(){

  const whitespaceRegEx = /\s/g;
  const nameTest = name.value.replace(whitespaceRegEx, "");
  nameError.innerHTML = "Full name";

  if(nameTest.length > 1){
    nameError.innerHTML = "Full name";
    return true;
  }
  else{
    nameError.innerHTML = "Full name</br><em>This field is required</em>";
    return false;
  };
};

function emailValidation(){

  const regEx = /\S+@\S+\.\S+/;
  const checkPattern = regEx.test(email.value);
  emailError.innerHTML = "Email address";

  if(checkPattern === true){
    emailError.innerHTML = "email address";
    return true;
  }
  else{
    emailError.innerHTML = "email address </br><em>Please enter a valid email address</em>";
    return false;
  };
};

function validateMessage(){

  const whitespaceRegEx = /\s/g;
  const messageTest = message.value.replace(whitespaceRegEx, "");
  messageError.innerHTML = "message";
  
  if(messageTest.length > 10){
    messageError.innerHTML = "message";
    return true;
  }
  else{
    messageError.innerHTML = "message </br><em>Minimum 10 characters</em>";
    return false;
  };
};


function validateForm(){
  const name = nameValidation();
  const email = emailValidation();
  const message = validateMessage();

  if(name && email && message){
    form.submit();
  };
};

function submitted(){
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("fullname");
  
  if(name){
    section.classList.add("submitted");
  };
};



submit.addEventListener("click", validateForm);

menu();
submitted();
cartItems();