var rpslsGame = function(player1, player2) {
  //Draw
  if(player1 == player2) {
    return "Draw!";
  }
  //Rock Wins
  if(player1 == "rock" && player2 == "scissors") {
    return "Player 1 Wins!";
  } else if (player1 == "rock" && player2 == "lizard") {
    return "Player 1 Wins!";
  } else if(player1 == "scissors" && player2 == "rock") {
    return "Player 2 Wins!";
  } else if (player1 == "lizard" && player2 == "rock") {
    return "Player 2 Wins!";
  }
  //Paper Wins

  //Scissors Wins

  //Lizard Wins

  //Spock Wins
}
