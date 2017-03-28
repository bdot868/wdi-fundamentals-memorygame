//console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*if(cardOne === cardTwo && cardThree === cardFour){
  alert('You found a Match')
} else {
  alert('Sorry, try again')
}
*/
function createCards(){
  gameBoard = document.getElementById('game-board')

  for (var i = 0; i < 4; i++) {
    cards = document.createElement('div')
    cards.className = "card";
    gameBoard.appendChild(cards)
  }
}
createCards()
