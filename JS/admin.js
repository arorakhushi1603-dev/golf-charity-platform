const users =
JSON.parse(
localStorage.getItem("users")
) || [];

const totalUsers =
document.getElementById(
"totalUsers"
);

const totalSubscribers =
document.getElementById(
"totalSubscribers"
);

const totalScores =
document.getElementById(
"totalScores"
);

totalUsers.textContent =
users.length;

let subscriberCount = 0;

let scoreCount = 0;

users.forEach(user => {

if(
user.subscription &&
user.subscription !== "Inactive"
){
subscriberCount++;
}

if(user.scores){

scoreCount +=
user.scores.length;

}

});

totalSubscribers.textContent =
subscriberCount;

totalScores.textContent =
scoreCount;