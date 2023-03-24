let url = document.URL;
let pName = url.slice(56, url.length);
document.getElementById("appendName").innerHTML = "Game " + pName;
const options = ["rock", "paper", "scissor"];

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const result = document.getElementById("result");

document.getElementById("rock").addEventListener("click", function () {
    document.getElementById("choose").style.visibility = "hidden";
    document.getElementById("paper").style.display = "none";
    document.getElementById("scissor").style.display = "none";
    play("rock");
});
document.getElementById("paper").addEventListener("click", function () {
    document.getElementById("choose").style.visibility = "hidden";
    document.getElementById("rock").style.display = "none";
    document.getElementById("scissor").style.display = "none";
    play("paper");
});
document.getElementById("scissor").addEventListener("click", function () {
    document.getElementById("choose").style.visibility = "hidden";
    document.getElementById("paper").style.display = "none";
    document.getElementById("rock").style.display = "none";
    play("scissor");
});

function play(playerChoice) {
    // document.getElementById("appendName").innerHTML = "Game " + pName;

    playerHand.innerHTML = "You choose " + playerChoice;

    const computerChoice = options[Math.floor(Math.random() * options.length)];
    document.getElementById("computer").style.display = "inline-block";
    document.getElementById("computer-img").src = "images/" + computerChoice + ".jpeg";
    computerHand.innerHTML = "Computer choose " + computerChoice;

    if (playerChoice === computerChoice) {
        result.innerHTML = "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        result.innerHTML = "You Win!";
    } else {
        result.innerHTML = "You Lose!";
    }

    setTimeout(() => {
        document.body.addEventListener("click", () => {
            window.location.href="rps.html?Name=" + pName;
        });
    }, 1000);
    
}   