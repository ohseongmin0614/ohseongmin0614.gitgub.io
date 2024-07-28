const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");

const USERS_LS = "currentUser";
const SHWING_CN = "showing";

function savaName(text) {
  localStorage.setItem(USERS_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  paintGreeting(currentValue);
  savaName(currentValue);
}

function askForName() {
  form.classList.add(SHWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHWING_CN);
  greeting.classList.add(SHWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USERS_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {loadName();}

init();