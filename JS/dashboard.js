const currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser){

window.location.href =
"login.html";

}

const welcomeText =
document.getElementById(
"welcomeText"
);

const charityText =
document.getElementById(
"charityText"
);

const subscriptionText =
document.getElementById(
"subscriptionText"
);

const scoreList =
document.getElementById(
"scoreList"
);

welcomeText.textContent =
"Welcome, " +
currentUser.name;

charityText.textContent =
"Selected Charity: " +
currentUser.charity;

subscriptionText.textContent =
currentUser.subscription;

displayScores();

function addScore(){

const scoreInput =
document.getElementById(
"scoreInput"
);

const score =
scoreInput.value;

if(score === ""){

alert(
"Please enter a score"
);

return;

}

currentUser.scores.push(score);

if(
currentUser.scores.length > 5
){

currentUser.scores.shift();

}

updateUser();

displayScores();

scoreInput.value = "";

}

function displayScores(){

scoreList.innerHTML = "";

currentUser.scores.forEach(
function(score){

const li =
document.createElement("li");

li.textContent =
"Score: " + score;

scoreList.appendChild(li);

}
);

}

function updateUser(){

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

users = users.map(user => {

if(
user.email ===
currentUser.email
){

return currentUser;

}

return user;

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

localStorage.setItem(
"currentUser",
JSON.stringify(currentUser)
);

}

function logout(){

localStorage.removeItem(
"currentUser"
);

window.location.href =
"login.html";

}