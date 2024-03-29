//Gamecube Games
const allGames = [
    {
        gameName: "The Legend of Zelda: Twilight Princess",
        consoleLibrary: "GameCube",
        releaseYear: 2005,
        gameImg: 'img/legendofzeldatwilightprincess.jpg'
    },
    {
        gameName: "Paper Mario: The Thousand-year Door",
        consoleLibrary: "GameCube",
        releaseYear: 2004,
        gameImg: 'img/papermariothethousandyeardoor.webp'
    },
    {
        gameName: "Sonic Adventure 2: Battle",
        consoleLibrary: "GameCube",
        releaseYear: 2002,
        gameImg: 'img/sonicadventure2battle.webp'
    },
    {
        gameName: "Crash Bandicoot: The Wrath of Cortex",
        consoleLibrary: "GameCube",
        releaseYear: 2002,
        gameImg: 'img/crashbandicootthewrathofcortex.jpg'
    },

    //NES Games
    {
        gameName: "The Legend of Zelda",
        consoleLibrary: "Nintendo Entertainment System (NES)",
        releaseYear: 1987,
        gameImg: 'img/legendofzelda.webp'
    },
    {
        gameName: "Super Mario Bros",
        consoleLibrary: "Nintendo Entertainment System (NES)",
        releaseYear: 1987,
        gameImg: 'img/supermariobros.webp'
    },
    {
        gameName: "Final Fantasy II",
        consoleLibrary: "Nintendo Entertainment System (NES)",
        releaseYear: 1991,
        gameImg: 'img/finalfantasyII.webp'
    },
    {
        gameName: "Mega Man",
        consoleLibrary: "Nintendo Entertainment System (NES)",
        releaseYear: 1989,
        gameImg: 'img/megaman.jpg'
    },


    //N64 Games
    {
        gameName: "Kirby 64: The Crystal Shards",
        consoleLibrary: "Nintendo 64",
        releaseYear: 2000,
        gameImg: 'img/kirby64thecrystalshards.webp'
    },
    {
        gameName: "The Legend of Zelda: Majora's Mask",
        consoleLibrary: "Nintendo 64",
        releaseYear: 2000,
        gameImg: 'img/legendofzeldamajorasmask.jpg'
    },
    {
        gameName: "Rayman 2: The Great Escape",
        consoleLibrary: "Nintendo 64",
        releaseYear: 1999,
        gameImg: 'img/Rayman2.jpg'
    },
    {
        gameName: "Mario Kart 64",
        consoleLibrary: "Nintendo 64",
        releaseYear: 1997,
        gameImg: 'img/mariokart64.webp'
    }
]




//gameConsoles

const gamingConsoles = [
    {
        name: "Nintendo 64",
        consoleImg: 'img/Nintendo64Controller.jpg'
    },
    {
        name: "Nintendo Entertainment System (NES)",
        consoleImg: 'img/NESConsole.jpg'
    },
    {
        name: "GameCube",
        consoleImg: 'img/GameCubeConsole.png'
    }
]


//Variable that holds the choosen console on click
let choosenConsole = '';

//Variable that holds the choosen game on click
let choosenGame = '';
let choosenGameIndex = 0;
let showingGame = false;

let gameResult = 0;

//Input variables
let inputGameName = '';
let inputRealeseYear = '';
let inputEngine = '';

// Variable that holds the info about the input game
let newInputGame = '';
