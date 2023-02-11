function startNewGame(){
    if(playersDetails[0].name !== '' || playersDetails[1].name !==''){
        activeGameElement.style.display = 'block';
    }else{
        alert('please enter both player1 and player2 name');
    }
}