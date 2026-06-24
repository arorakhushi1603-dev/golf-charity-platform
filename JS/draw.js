function generateDraw(){

let drawNumbers = [];

while(
drawNumbers.length < 5
){

let randomNumber =

Math.floor(
Math.random()*45
)+1;

if(
!drawNumbers.includes(
randomNumber
)
){

drawNumbers.push(
randomNumber
);

}

}

localStorage.setItem(
"monthlyDraw",
jsON.stringify(
drawNumbers
)
);

document.getElementById(
"drawNumbers"
).textContent =

drawNumbers.join(
" , "
);

findWinners(
drawNumbers
);

}

function findWinners(
drawNumbers
){

let users =
jsON.parse(
localStorage.getItem(
"users"
)
) || [];

let winners = [];

users.forEach(user => {

if(
!user.scores
) return;

let matches = 0;

user.scores.forEach(
score => {

if(
drawNumbers.includes(
Number(score)
)
){

matches++;

}

}
);

if(matches >= 3){

winners.push({

name:user.name,
matches:matches

});

}

});

localStorage.setItem(
"winners",
jsON.stringify(
winners
)
);

console.log(
"Winners:",
winners
);

}