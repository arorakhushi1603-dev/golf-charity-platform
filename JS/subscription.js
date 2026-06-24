function buyPlan(plan){

let currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);

if(!currentUser){

alert(
"Please login first"
);

window.location.href =
"login.html";

return;

}

currentUser.subscription =
plan;

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

alert(
plan +
" Subscription Activated Successfully"
);

window.location.href =
"dashboard.html";

}