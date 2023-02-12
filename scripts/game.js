function startNewGame(){
    if(playersDetails[0].name !== '' || playersDetails[1].name !==''){
        activeGameElement.style.display = 'block';
    }else{
        alert('please enter both player1 and player2 name');
    }
}

function gameField(event){
    event.target.textContent = playersDetails[currentPlayer].symbol;
    event.target.classList.add('disabled-btn');
    //this.textContent = 'x';
    changePlayer();
}

function changePlayer(){
    if(currentPlayer ===0){
        currentPlayer = 1;
    }else{
        currentPlayer=0;
    }
    currentPlayerDisplayElement.textContent = playersDetails[currentPlayer].name;
}