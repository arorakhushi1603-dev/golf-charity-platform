function selectCharity(charityName){

let currentUser =
jsON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser){

alert("Please login first");

window.location.href =
"login.html";

return;

}

currentUser.charity =
charityName;

let users =
jsON.parse(
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
jsON.stringify(users)
);

localStorage.setItem(
"currentUser",
jsON.stringify(currentUser)
);

alert(
"Charity Selected Successfully"
);

window.location.href =
"dashboard.html";

}