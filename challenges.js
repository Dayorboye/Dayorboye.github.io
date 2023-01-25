var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn--roll').addEventListener('click', function(){
  if (gamePlaying){
      //  Random number
      var dice1 =  Math.floor(Math.random() * 6 + 1);
      var dice2 =  Math.floor(Math.random() * 6 + 1);
      document.querySelector('#current--' + activePlayer).textContent = dice1;
      document.querySelector('#current--' + activePlayer).textContent = dice2;
      
      // Display number
      var diceDOM1 = document.getElementById('dice-1');
      var diceDOM2 = document.getElementById('dice-2');
      diceDOM1.style.display = 'block';
      diceDOM2.style.display = 'block';
      diceDOM1.src = 'dice-' + dice1 + '.png';
      diceDOM2.src = 'dice-' + dice2 + '.png';

      // Update the round score IF the rolled number was NOT a 1 
      if (dice1 !==1 && dice2 !==1 ){
        // Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
      }else{
        // next player
        nextplayer();
      } 


      /*
      
      if (dice === 6 && lastDice === 6){
        // Player loose score
        scores[activePlayer] = 0;
        document.querySelector('#score--' + activePlayer).textContent = '0';
        nextplayer();

      }else if (dice !==1){
        // Add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
      }else{
        // next player
        nextplayer();
      }
       
      lastDice = dice;
      */
  }
  
});

document.querySelector('.btn--hold').addEventListener('click', function(){
  if (gamePlaying){
      // Add curent score to global score
      scores[activePlayer] += roundScore;

      // Update the UI
      document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
      
      var input = document.querySelector('.final-score').value;
      
      // Setting winning Score  
      if (input){
        var wininingScore = input;
      } else{
        wininingScore = 100
      }
    
      // Check if the player won again
      if (scores[activePlayer] >= wininingScore){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        // document.querySelector('.dice-1').style.display = 'none';
        // document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
      }else{
          // next player
          nextplayer();
      }
  }
  


});

function nextplayer(){
  // next player
  activePlayer === 0 ? activePlayer =  1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

//   document.querySelector('.dice-1').style.display = 'none';
//   document.querySelector('.dice-2').style.display = 'none';

}

document.querySelector('.btn--new').addEventListener('click', init);


function init(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

//   document.getElementById('dice-1').style.display = 'none';
//   document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'player 2';
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  
  
};