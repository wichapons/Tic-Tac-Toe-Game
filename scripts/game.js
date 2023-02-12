function restartGame(){
    currentEditplayerID = 0;
    currentPlayer = 0;
    roundCount = 0;
    winnerPlayerId=0;
    isGameOver = false;
    //gameOverElement.innerHTML='You won!,<span id="winner">PLAYER Name</span>';
    gameOverElement.style.display = 'none'
    let z=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            data[i][j]=0;
            selectAllGameFieldElement[z].textContent='';
            selectAllGameFieldElement[z].classList.remove('disabled-btn');
            z++;
        };
    }
    currentPlayerDisplayElement.textContent = playersDetails[currentPlayer].name;
}

function startNewGame(){
    if(playersDetails[0].name !== '' || playersDetails[1].name !==''){
        activeGameElement.style.display = 'block';
    }else{
        alert('please enter both player1 and player2 name');
        return;
    }
    restartGame();
}

function gameField(event){
    console.log(isGameOver);
    if (isGameOver === true) {
        return;
    }

    const colLocation = event.target.dataset.col -1;
    const rowLocation = event.target.dataset.row -1;
    if (data[rowLocation][colLocation] === 0){
        roundCount++
        event.target.textContent = playersDetails[currentPlayer].symbol;
        event.target.classList.add('disabled-btn');
        //this.textContent = 'x';
        data[rowLocation][colLocation]= currentPlayer+1; // for change the 2d array data to match with the playernum (0=default, so 1 = P1, 2=P2)
        console.log(data);
        const winnerPlayerId = gameOvercheck();
        console.log(winnerPlayerId);
        if (winnerPlayerId === 0){
            changePlayer();
            console.log('no player wins yet');
        }else{
            gameOverElement.style.display = 'block'
            isGameOver = true;
            winnerName.textContent = playersDetails[winnerPlayerId].name;
            console.log('congrats playerID'+winnerPlayerId+ 'wins!');
        }
        if (roundCount ===9 && winnerPlayerId === 0){
            gameOverElement.style.display = 'block';
            drawElement.textContent='its draw!';
            console.log('it\'s draw');
            isGameOver = true;
        } 
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

function gameOvercheck(){
    /*
    if (data[0][0] >0 && data[0][0]=== data[0][1] && data[0][1] === data[0][2]){
        return data[0][0];}*/

   //check row 3 strike
   for(let i=0; i<3;i++){
    if (data[i][0] >0 && data[i][0]=== data[i][1] && data[i][1] === data[i][2]){
        console.log('1');
        return data[i][0];
    }
    if (data[0][i] > 0 && data[0][i]=== data[1][i] && data[1][i] === data[2][i]){
        console.log('2');
        return data[0][i];
   }
};
    
   if (data[0][0] >0 && data[0][0]=== data[1][1] && data[1][1] === data[2][2]){
    console.log('3');
    return data[0][0];
   }
   if (data[0][2] > 0 && data[0][2] === data[1][1] && data[1][1] === data[2][0]){
    console.log('4');
    return data[0][2];
   }
   return 0;
    };