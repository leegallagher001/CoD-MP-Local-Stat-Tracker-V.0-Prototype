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
    // hide form elements
    newEntryFormContainer.style.display = 'none';
    // display entered data
    const player = document.createElement("p");
    player.innerText = `Player: ${newEntryPlayer}`;
    document.getElementById("entry-review").appendChild(player);

}