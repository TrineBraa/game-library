// choose a Console
function chooseAConsole(index) {
    choosenConsole = gamingConsoles[index].name;
    console.log(choosenConsole)
}

//Reset the View


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
        consoleLibrary: inputRealeseYear,
        releaseYear: inputEngine,
        gameImg: ''
    }
    allGames.push[newInputGame];
    updateView()
}