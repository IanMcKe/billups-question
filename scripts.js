var choices = ["rock", "scissors", "lizard", "paper", "spock"];

function mod(a, b) {
  var c = a % b;
  if(c < 0) {
    return c + b;
  } else {
    return c;
  }
}

var rpslsGame = function(player1, player2) {
  //Draw
  if(player1 == player2) {
    return "Draw!";
  }

  var player1Index = choices.indexOf(player1);
  var player2Index = choices.indexOf(player2);

  if(mod((player1Index - player2Index), choices.length) > choices.length/2) {
    return "Player 1 Wins!";
  } else {
    return "Player 2 Wins!";
  }
}
