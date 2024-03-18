//Main View (Holds everything from the base view of things.)
updateView()

function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <br>
    <h1>Game Library</h1>
    <br/>
    <h2>My Consoles</h2>
    <div id="consoleContainer">${seeConsoles()}</div> <div id="showGameInfo"> ${showingGame == true ? showSelectedGame() : ""}</div>
    <br/>
    <br/>
    <div id="buttonContainer">
            <button onclick="addNewGame()">Add a New Game</button>
            <button onclick ="getRandomGame()">Get a Random Game</button>
            <button onclick="removeChosenConsole()">See all Games</button>
    <br/>
    <h3>My Games</h3>                 
    <br/>
    <div id="gameContainer">         ${showGames()}                   </div>
    `;
}



//all Consol View (gameCube, Nintendo 64 & Nintendo Entertainment System (NES))
function seeConsoles() {
    let consoleHtml = '';
    for (let i = 0; i < gamingConsoles.length; i++) {
        consoleHtml += `<img class="consoles" onclick="chooseAConsole(${i})" src="${gamingConsoles[i].consoleImg}" />`
    }
    return consoleHtml;
}

//A View for chosen Game

//Selected console view
function selectedConsole() {
    if (choosenConsole == allGames[i].consoleLibrary) {
        gamesHtml += `<img class="showngameImg" onclick="chooseAGame(${i})" src=""/>`;
        updateView()
    }
}
// tror jeg vet hva du kan gjøre klassepreik? syure
//Selected Game View
function showSelectedGame() {
    return `<div id="extraGameInfo">
                            <div>${allGames[choosenGameIndex].gameName}</div>
                            <div>${allGames[choosenGameIndex].releaseYear}</div>
                            <div>${allGames[choosenGameIndex].consoleLibrary}</div>
                        </div>`;
}
/* function showSelectedGame(index) {
    let extraGameHTML = '';
    if (choosenGame == allGames[index].gameName) {
        extraGameHTML = `<div id="extraGameInfo">
                            <div>${allGames[index].gameName}</div>
                            <div>${allGames[index].releaseYear}</div>
                            <div>${allGames[index].consoleLibrary}</div>
                        </div>`;
    }
    return extraGameHTML;
} */

//add A New Game View (input fields and buttons)
function addNewGame() {
    app.innerHTML = `
    <h1>New Game</h1>
    <br><button onclick="updateView()">Back to library</button>
    <div>
    <br/>
    <div>Game Title:   </div> <input onchange="inputGame(this.value)"/>
    <div>Release year: </div> <input onchange="inputYear(this.value)"/>
    <div>Console:      </div> <select onchange="inputConsole(this.value)">
                                    <option>Nintendo 64</option>
                                    <option>Nintendo Entertainment System (NES)</option>
                                    <option>GameCube</option>
                                    </select>
    <br/>
    <br/>
    <button onclick="addANewGame()">Add New Game</button>
    </div>
    `;
}


//A function that shows the different games as a console is chosen.
function showGames() {
    if (choosenConsole == "GameCube") {
        return showGameCubeGames()
    } else if (choosenConsole == "Nintendo 64") {
        return showN64Games()
    } else if (choosenConsole == "Nintendo Entertainment System (NES)") {
        return showNESGames()
    }
    else {
        return showAllGames()
    }
}

// game View
function showAllGames() {
    let gamesHtml = '';
    for (let i = 0; i < allGames.length; i++) {
        gamesHtml += `<div class="shownText">
                        <img class="showngameImg" onclick="chooseAGame(${i})" src="${allGames[i].gameImg}"/><br/> 
                        ${allGames[i].gameName}</div>`;
    }
    return gamesHtml;
}

//Show the games of a chosen consol.
function showNESGames() {
    let gamesHtml = '';
    for (let i = 0; i < allGames.length; i++) {
        if (allGames[i].consoleLibrary == choosenConsole)
            gamesHtml += `<div class="shownText">
                        <img class="showngameImg" onclick="chooseAGame(${i})" src="${allGames[i].gameImg}"/>
                         ${allGames[i].gameName}</div>`;
    }
    return gamesHtml;
}

function showN64Games() {
    let gamesHtml = '';
    for (let i = 0; i < allGames.length; i++) {
        if (allGames[i].consoleLibrary == choosenConsole)
            gamesHtml += `<div class="shownText">
                         <img class="showngameImg" onclick="chooseAGame(${i})" src="${allGames[i].gameImg}"/>
                          ${allGames[i].gameName}</div>`;
    }
    console.log(gamesHtml)
    return gamesHtml;
}

function showGameCubeGames() {
    let gamesHtml = '';
    for (let i = 0; i < allGames.length; i++) {
        if (allGames[i].consoleLibrary == choosenConsole)
            gamesHtml += `<div class="shownText">
                            <img class="showngameImg" onclick="chooseAGame(${i})" src="${allGames[i].gameImg}"/>
                            ${allGames[i].gameName}</div>`;
    }
    return gamesHtml;
}

