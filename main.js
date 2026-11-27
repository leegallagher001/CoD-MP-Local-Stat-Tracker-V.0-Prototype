const newGameButton = document.getElementById("new-game-button");

const newEntryFormContainer = document.getElementById("new-entry-form-container");

let newEntryGame = document.getElementById("game").value;
let newEntryMap = document.getElementById("map").value;
let newEntryGameMode = document.getElementById("game-mode").value;
let newEntryScore = document.getElementById("score").value;
let newEntryKills = document.getElementById("kills").value;
let newEntryDeaths = document.getElementById("deaths").value;
let newEntryKDRatio = document.getElementById("kd-ratio").value;
let newEntryWinLoss = document.getElementById("win-loss").value;

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
    let player = document.createElement("p");
    player.innerText = `Player: ${newEntryPlayer}`;
    entryReview.appendChild(player);

    // GAME
    let game = document.createElement("p");
    game.innerText = `Player: ${newEntryGame}`;
    entryReview.appendChild(game);

    // MAP
    let map = document.createElement("p");
    map.innerText = `Map: ${newEntryMap}`;
    entryReview.appendChild(map);

    // GAME MODE
    let gameMode = document.createElement("p");
    gameMode.innerText = `Game Mode: ${newEntryGameMode}`;
    entryReview.appendChild(gameMode);

    // SCORE
    let score = document.createElement("p");
    score.innerText = `Score: ${newEntryScore}`;
    entryReview.appendChild(score);

    // KILLS/ELIMINATIONS
    let kills = document.createElement("p");
    kills.innerText = `Kills: ${newEntryKills}`;
    entryReview.appendChild(kills);

    // DEATHS
    let deaths = document.createElement("p");
    deaths.innerText = `Deaths: ${newEntryDeaths}`;
    entryReview.appendChild(deaths);

    // K/D RATION
    let kdRatio = document.createElement("p");
    kdRatio.innerText = `K/D Ratio: ${newEntryKDRatio}`;
    entryReview.appendChild(kdRatio);

    // WIN/LOSS
    let winLoss = document.createElement("p");
    winLoss.innerText = `Match Result: ${newEntryWinLoss}`;
    entryReview.appendChild(winLoss);

    // display save entry message
    const saveMessage = document.createElement("h4");
    saveMessage.style.marginLeft = "20px";
    saveMessage.innerText = "Would You Like To Save Entry?";
    entryReview.appendChild(saveMessage);

    // buttons
    const yesBtn = document.createElement("button");
    yesBtn.style.marginLeft = "20px";
    yesBtn.style.marginBottom = "20px";
    yesBtn.innerText = "Yes";
    entryReview.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.style.marginLeft = "20px";
    noBtn.style.marginBottom = "20px";
    noBtn.innerText = "No";
    entryReview.appendChild(noBtn);

    // button functionality

    noBtn.onclick = function declineEntry() {
        entryReview.style.display = 'none';
        newEntryFormContainer.style.display = 'inline-block';
    };

}