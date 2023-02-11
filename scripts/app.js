let currentEditplayerID = 0;
const playersDetails =[
    {
        name:'',
        symbol:'X'
    },{
        name:'',
        symbol:'O'
    }
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


//event listener//
//edit button 
editPlayer1Btn.addEventListener('click',playerConfig);
editPlayer2Btn.addEventListener('click',playerConfig);
//cancel button 
cancelBtn.addEventListener('click',closeOverlay);
//input player name 
inputFormElement.addEventListener('submit',savePlayerName)

