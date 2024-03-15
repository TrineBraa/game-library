//Main View (Holds everything from the base view of things.)
updateView()

function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <br>
    <h1>Game Library</h1>
    <br/>
    <h2>My Consoles</h2>
    <div id="consoleContainer">    ${seeConsoles()}     </div>
    <br/>
    <br/>
    <div id="buttonContainer">
    <button onclick="addNewGame()">Add a New Game</button><button>Get a Random Game</button><button>See all Games</button>
    </div>
    <h3>My Games</h3>                   </div>
    <br/>
    <div id="gameContainer">         ${showAllGames()}                   </div>
    `;
}



//all Consol View (gameCube, Nintendo 64 & Nintendo Entertainment System (NES))
function seeConsoles() {
    consoleHtml = '';
    for (let i = 0; i < gamingConsoles.length; i++) {
        consoleHtml += `<img class="consoles" onclick="selectedConsole()" src="${gamingConsoles[i].consoleImg}" />`
    }
    return consoleHtml;
}


//Selected console view
function selectedConsole() {

}


//add A New Game View (input fields and buttons)
function addNewGame() {
    app.innerHTML = `
    <h1>New Game</h1>
    <br><button onclick="updateview()">Back to library</button>
    <div>
    <br/>
    <div>Game Title:    <input></div>
    <div>Release year:  <input></div>
    <div>Console:       <input></div>
    <br/>
    <button>Add New Game</button>
    </div>
    `;
}


// game View
function showAllGames() {
    gamesHtml = '';
    for (let i = 0; i < allGames.length; i++) {
        gamesHtml += `<img class="showngameImg" onclick="" src="${allGames[i].gameImg}"/>`;
    }
    return gamesHtml;
}