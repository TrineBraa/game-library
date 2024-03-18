// choose a Console
function chooseAConsole(index) {
    choosenConsole = gamingConsoles[index].name;
    console.log(choosenConsole)
    updateView()
}

//Reset the View
function removeChosenConsole() {
    choosenConsole = ''
    updateView()
}


//Choose a Game
function chooseAGame(index) {
    choosenGame = allGames[index].gameName;
    console.log(choosenGame)
    updateView()
}

//get a Random Game
function getRandomGame() {
    let gameResult = Math.floor(Math.random() ^ allGames.length);
    return gameResult;
}


// add a New Game
function inputGame(inputValue) {
    inputGameName = inputValue;
}

function inputYear(inputValue) {
    inputRealeseYear = inputValue;
}

function inputConsole(inputValue) {
    inputEngine = inputValue
}

function addANewGame() {
    newInputGame = {
        gameName: inputGameName,
        consoleLibrary: inputEngine,
        releaseYear: inputRealeseYear,
        gameImg: ''
    }
    allGames.push(newInputGame);

    updateView()
}