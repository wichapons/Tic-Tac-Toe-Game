
function playerConfig(event){
    const playerNum = event.target.dataset.playerNum; //if dataset has dash(-) like player-Num => dataset['playerNum'] because cannot access to object with dash with dot command
    playerOverlay.style.display='block';
    backdropElement.style.display='block';
}

function closeOverlay(){
    playerOverlay.style.display = 'none';
    backdropElement.style.display= 'none';
    inputWarning.textContent='';
}

function savePlayerName(event){
    event.preventDefault();
    /*
    const formData = new FormData(event.target);
    const inputPlayerName = formData.get('username');
    */
    const inputPlayerName = document.querySelector("#playername").value.trim(); // '      top lop    '  => 'top lop'
    
    if (!inputPlayerName){
       inputWarning.textContent = 'please enter the name';
       inputWarning.style.display = 'block'
    }


}