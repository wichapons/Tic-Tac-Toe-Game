
//edit button
const editPlayer1Btn = document.querySelector('#edit-player1-btn');
const editPlayer2Btn = document.querySelector('#edit-player2-btn');
console.log(editPlayer1Btn);

//overlay
const playerOverlay = document.querySelector('#overlay-config');
const backdropElement = document.querySelector('#backdrop');
const cancelBtn = document.querySelector('#overlay-config .btn-alt');
console.log(cancelBtn);


editPlayer1Btn.addEventListener('click',playerConfig);
editPlayer2Btn.addEventListener('click',playerConfig);
cancelBtn.addEventListener('click',cancelBtnConfig)