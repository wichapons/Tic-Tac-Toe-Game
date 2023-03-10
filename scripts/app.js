let currentEditplayerID = 0;
let currentPlayer = 0;
let roundCount = 0;
let isGameOver = false;
const playersDetails =[
{
        name:'',
        symbol:'X'
    },{
        name:'',
        symbol:'O'
    }
];

const data= [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];


//edit button on main page
const editPlayer1Btn = document.querySelector('#edit-player1-btn');
const editPlayer2Btn = document.querySelector('#edit-player2-btn');
console.log(editPlayer1Btn);

//overlay
const playerOverlay = document.querySelector('#overlay-config');
const backdropElement = document.querySelector('#backdrop');
const cancelBtn = document.querySelector('#overlay-config .btn-alt');
const inputFormElement = document.querySelector('.overlay form');
//inputwarning
const inputWarning =  document.querySelector('#enter-name-warning');
//playername in input
const playernameInputElement = document.querySelector("#playername")
//playerNameElement on main page
const player1NameElement = document.querySelector('#game-config .player1');
const player2NameElement = document.querySelector('#game-config .player2');

//For Game logic element
const startGameButtonElement = document.querySelector('#start-game-btn');
const activeGameElement = document.querySelector('#active-game');
const selectAllGameFieldElement = document.querySelectorAll('#game-window li');
const currentPlayerDisplayElement = document.querySelector('#active-username');
const gameOverElement = document.querySelector('#game-over');
const winnerName = document.querySelector('#winner');
const drawElement = document.querySelector('#game-over h2');

//edit button 
editPlayer1Btn.addEventListener('click',playerConfig);
editPlayer2Btn.addEventListener('click',playerConfig);
//cancel button 
cancelBtn.addEventListener('click',closeOverlay);
//input player name 
inputFormElement.addEventListener('submit',savePlayerName)
//Start Game Button
startGameButtonElement.addEventListener('click',startNewGame)


//
for (const gameFieldElement of selectAllGameFieldElement ){ //use loop for adding eventlistener to each li element
    gameFieldElement.addEventListener('click',gameField);
}

