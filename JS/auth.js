const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", function(e) {

e.preventDefault();

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

const charity = document.getElementById("charity").value;

let users =
JSON.parse(localStorage.getItem("users")) || [];

const userExists = users.find(
user => user.email === email
);

if(userExists){

alert("User already exists");

return;

}

const newUser = {

name,
email,
password,
charity,
scores:[],
subscription:"Inactive"

};

users.push(newUser);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Account Created Successfully");

window.location.href = "login.html";

});

}