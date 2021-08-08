/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// I. FOR ROLL BUTTON

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying) {
    
    //1.Random Number
   var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
   var diceDOM = document.querySelector('.dice'); diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3 Update the round score IF the rolled number was NOT a 1

    if (dice !== 1) {
        //Add score
        roundScore +=dice; //same as roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;}
        else {
            //next player
         nextPlayer();
        }
        
    }
    
});


// II. FOR HOLD BUTTON

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying) {  //1 add CURRENT SCORE to GLOBAL SCORE
    scores[activePlayer] += roundScore;
    
    //2 Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //3 Check if player won the game
    
if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
} 
    
    
    
    else {
    
    
    
    //4 To switch to the Next player IF Hold button is pressed
    nextPlayer();
    
}}
  
    
   
    
 
        
   
    
    

});


//Function to shift to 
     function nextPlayer() {
            activePlayer === 0? activePlayer = 1 : activePlayer = 0; // same as if (activePlayer === 0) {activePlayer = 1;} else {activePlayer =0;}
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display='none';
            
        }

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 for 1st player and 1 for 2nd player. 0 for 1st element and 1 for 2nd element.
gamePlaying = true;


document.querySelector('.dice').style.display = 'none';




document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';
    
document.getElementById('name-0').textContent = 'Player 1';

document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
    
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
    
document.querySelector('.player-1-panel').classList.remove('active'); 
    
document.querySelector('.player-0-panel').classList.add('active');
    
}

//document.querySelector('#current-' + activePlayer).textContent = dice;

