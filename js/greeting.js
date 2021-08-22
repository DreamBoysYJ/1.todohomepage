const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
event.preventDefault();
loginForm.classList.add(HIDDEN_CLASSNAME)
const username = loginInput.value;
localStorage.setItem(USERNAME_KEY, username);
paintGreetings(username);
}

function paintGreetings(savedUsername) {
    greeting.innerText = "오늘도 힘차게, " +  savedUsername + "!";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit );

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else{
  paintGreetings(savedUsername);
   
}





