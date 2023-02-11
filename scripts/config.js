
function playerConfig(event){
    console.log(event.target);
    const validatedPlayerId = parseInt(event.target.dataset.playerid); //if dataset has dash(-) like player-num => dataset['playernum'] because cannot access to object with dash with dot command
    
    currentEditplayerID = validatedPlayerId;
    playerOverlay.style.display='block';
    backdropElement.style.display='block';
}

function closeOverlay(){
    playerOverlay.style.display = 'none';
    backdropElement.style.display= 'none';
    playernameInputElement.value = '';
    inputWarning.textContent='';
}

function savePlayerName(event){
    event.preventDefault();

    const inputPlayerName = document.querySelector("#playername").value.trim(); // '      top lop    '  => 'top lop'
    console.log(currentEditplayerID);

    if (!inputPlayerName){
       inputWarning.textContent = 'please enter the name';
       inputWarning.style.display = 'block'
    } else{
        if (currentEditplayerID === 1){
            player1NameElement.textContent = inputPlayerName;
            playersDetails[0].name = inputPlayerName;
            playernameInputElement.value = ''; //clear text in the input overlay after click confirm
            closeOverlay()
        } 
        if (currentEditplayerID === 2){
            player2NameElement.textContent = inputPlayerName;
            console.log('change player2Name');
            playersDetails[1].name = inputPlayerName;
            playernameInputElement.value = ''; //clear text in the input overlay after click confirm
            closeOverlay();
    }  if (currentEditplayerID !== 2 && currentEditplayerID !== 1 ){
        console.log('something wrong with currentEditplayerID');
}
}};