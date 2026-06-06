console.log("Hello World");

let homeScore = document.querySelector(".home-score");

let awayScore = document.querySelector(".away-score");
function homeAddOne()
{
    console.log("Button Clicked");
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
}

function homeAddTwo()
{
    console.log("Button Clicked");
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
}

function homeAddThree()
{
    console.log("Button Clicked");
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
}

function awayAddOne()
{
    console.log("Button Clicked");
    awayScore.textContent = parseInt(awayScore.textContent) + 1;
}

function awayAddTwo()
{
    console.log("Button Clicked");
    awayScore.textContent = parseInt(awayScore.textContent) + 2;
}

function awayAddThree()
{
    console.log("Button Clicked");
    awayScore.textContent = parseInt(awayScore.textContent) + 3;
}

