// choose a Console
function chooseAConsole(index) {
    choosenConsole = gamingConsoles[index].name;
    console.log(choosenConsole)
    updateView()
}

//Reset the View
function removeChosenConsole() {
    choosenConsole = ''
    extraInfoHTML = ''
    updateView()
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

//Choose a Game
function chooseAGame(index) {
    choosenGameIndex = index;
    showingGame = true;
    console.log(choosenGame)
    updateView()
    /* choosenGame = allGames[index].gameName; */
}

function getRandomGame() {
    showingGame = true
    choosenGameIndex = Math.floor(Math.random() * allGames.length)
    updateView()
}