const newGameButton = document.getElementById("new-game-button");

const newEntryFormContainer = document.getElementById("new-entry-form-container");

const newEntryGame = document.getElementById("game").value;
const newEntryMap = document.getElementById("map").value;
const newEntryGameMode = document.getElementById("game-mode").value;
const newEntryScore = document.getElementById("score").value;
const newEntryKills = document.getElementById("kills").value;
const newEntryDeaths = document.getElementById("deaths").value;
const newEntryKDRatio = document.getElementById("kd-ratio").value;
const newEntryWinLoss = document.getElementById("win-loss").value;

function newGame() {
    // establish values
    let newEntryPlayer = document.getElementById("player").value;
    let newEntryGame = document.getElementById("game").value;
    let newEntryMap = document.getElementById("map").value;
    let newEntryGameMode = document.getElementById("game-mode").value;
    let newEntryScore = document.getElementById("score").value;
    let newEntryKills = document.getElementById("kills").value;
    let newEntryDeaths = document.getElementById("deaths").value;
    let newEntryKDRatio = document.getElementById("kd-ratio").value;
    let newEntryWinLoss = document.getElementById("win-loss").value;

    // hide form elements
    newEntryFormContainer.style.display = 'none';

    // add styling to entry review
    const entryReview = document.getElementById("entry-review");
    entryReview.style.backgroundColor = "darkorange";
    entryReview.style.color = "black";
    entryReview.style.display = "inline-block";
    entryReview.style.width = "100%";
    entryReview.style.borderRadius = "25px";
    
    // display review message
    const reviewMessage = document.createElement("h4");
    reviewMessage.style.margin = "20px";
    reviewMessage.innerText = "Please Review New Game Entry Below:";
    entryReview.appendChild(reviewMessage);

    // display entered data

    // PLAYER
    const player = document.createElement("p");
    player.innerText = `Player: ${newEntryPlayer}`;
    entryReview.appendChild(player);

    // GAME
    const game = document.createElement("p");
    game.innerText = `Player: ${newEntryGame}`;
    entryReview.appendChild(game);

}