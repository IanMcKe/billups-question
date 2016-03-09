describe('rpslsGame', function() {
  //Draw case
  it('returns "Draw!" if both players enter the same choice', function() {
    expect(rpslsGame("rock", "rock")).to.equal("Draw!");
  });

  //Rock Wins cases
  it('Player 1 wins if he or she enters "rock" and Player 2 enters "scissors"', function() {
    expect(rpslsGame("rock", "scissors")).to.equal("Player 1 Wins!");
  });

  it('Player 1 wins if he or she enters "rock" and Player 2 enters "lizard"', function() {
    expect(rpslsGame("rock", "lizard")).to.equal("Player 1 Wins!");
  });

  it('Player 2 wins if he or she enters "rock" and Player 1 enters "scissors"', function() {
    expect(rpslsGame("scissors", "rock")).to.equal("Player 2 Wins!");
  });

  it('Player 2 wins if he or she enters "rock" and Player 1 enters "lizard"', function() {
    expect(rpslsGame("lizard", "rock")).to.equal("Player 2 Wins!");
  });

  //Paper Wins cases
  it('Player 1 wins if he or she enters "paper" and Player 2 enters "rock"', function() {
    expect(rpslsGame("paper", "rock")).to.equal("Player 1 Wins!");
  });

  it('Player 1 wins if he or she enters "paper" and Player 2 enters "spock"', function() {
    expect(rpslsGame("paper", "spock")).to.equal("Player 1 Wins!");
  });

  it('Player 2 wins if he or she enters "paper" and Player 1 enters "rock"', function() {
    expect(rpslsGame("rock", "paper")).to.equal("Player 2 Wins!");
  });

  it('Player 2 wins if he or she enters "paper" and Player 1 enters "spock"', function() {
    expect(rpslsGame("spock", "paper")).to.equal("Player 2 Wins!");
  });
});
