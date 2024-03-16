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
    <button onclick="addNewGame()">Add a New Game</button><button>Get a Random Game</button><button onclick="updateView()">See all Games</button>
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
        consoleHtml += `<img class="consoles" onclick="chooseAConsole(${i})" src="${gamingConsoles[i].consoleImg}" />`
    }
    return consoleHtml;
}


//Selected console view
function selectedConsole() {
    if (choosenConsole == allGames[i].consoleLibrary) {
        gamesHtml += `<img class="showngameImg" onclick="" src=""/>`;
        updateView()
    }
}


//add A New Game View (input fields and buttons)
function addNewGame() {
    app.innerHTML = `
    <h1>New Game</h1>
    <br><button onclick="updateView()">Back to library</button>
    <div>
    <br/>
    <div>Game Title:   </div> <input>
    <div>Release year: </div> <input>
    <div>Console:      </div> <input>
    <br/>
    <button onclick="">Add New Game</button>
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