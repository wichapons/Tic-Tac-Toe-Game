function startNewGame(){
    if(playersDetails[0].name !== '' || playersDetails[1].name !==''){
        activeGameElement.style.display = 'block';
    }else{
        alert('please enter both player1 and player2 name');
    }
}

function gameField(event){
    const colLocation = event.target.dataset.col -1;
    const rowLocation = event.target.dataset.row -1;
    if (data[rowLocation][colLocation] === 0){
        event.target.textContent = playersDetails[currentPlayer].symbol;
        event.target.classList.add('disabled-btn');
        //this.textContent = 'x';
        data[rowLocation][colLocation]= currentPlayer+1; // for change the 2d array data to match with the playernum (0=default, so 1 = P1, 2=P2)
    console.log(data);
    changePlayer();
    }else{
        alert("This position is already reserved, please select another position")
    }
}

function changePlayer(){
    if(currentPlayer ===0){
        currentPlayer = 1;
    }else{
        currentPlayer=0;
    }
    currentPlayerDisplayElement.textContent = playersDetails[currentPlayer].name;
}