// When document ready
$(document).ready(function() {
  // Declare variables

  var winTot = 0;
  var lossTot = 0;
  var guessLeft = 9;
  var guessArray = [];
  var alphArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var userGuess;
  var compGuess;

  // Display data in html tags

  $("#wins").text("Wins: " + winTot);
  $("#losses").text("Losses: " + lossTot);
  $("#guess-left").text("Guesses Left: " + guessLeft);

  // Create on key events for all letters and store in userGuess

  // Write letters to guessArray with each on key event

  // Subtract 1 from guessLeft with each on key event

  // Make function to use random number generator / round down and apply to alphArray to generate compGuess

  // Create reset function to reset guessArray and guessLeft and generate compGuess

  // write if or case statements

  // if compGuess the same as userGuess, reset, add 1 to wins

  // else guessLeft = 0, reset, add 1 to losses,
});
