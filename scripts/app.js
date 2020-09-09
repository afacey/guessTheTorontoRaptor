const game = {};

// VARIABLES
game.gameState = false;
game.players = players;
game.questions = [];
game.questionMax = players.length;
game.questionsAnswered = 0;
game.questionsCorrect = 0;

// METHODS
game.startGame = function() {
  console.log('game started');
  // fetch the next question
  // populate the question in the game container
}

game.getRandomIdx = function(array) {
  const idx = Math.floor(Math.random() * array.length);
  return idx;
}

game.populateQuestions = function() {
  const questions = game.players.slice();

  return questions;
}

game.getRandomNames = function(notIdx) {
  // make a copy of the players array
  const players = game.players.slice();

  // remove the players name from the copy of the players array
  players.splice(notIdx, 1);

  // create an array to hold the player names
  const playerNames = [];

  for (let i = 0; i < 3; i++) {
    // get a random index of the functions players array
    const randomIdx = game.getRandomIdx(players);
    // push name of player at the random index of the players array
    playerNames.push(players[randomIdx].name);
    // remove that name from the players array
    players.splice(randomIdx, 1);
  }

  // return the 3 randomly selected names
  return playerNames; 
}

game.getNextQuestion = function() {

}

// DOCUMENT READY
$(function() {
  console.log("document ready");
});