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
  // Refer to https://codegazerants.com/2015/09/12/javascript-catch-keystrokes/
  // Use https://keycode.info to know what ID goes with what keystroke
  // notice letter keys go from 65-90
  document.onkeydown = function(userGuess) {
    switch (userGuess.keyCode) {
      case 65:
        var let = "a";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 66:
        var let = "b";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 67:
        var let = "c";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 68:
        var let = "d";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 69:
        var let = "e";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 70:
        var let = "f";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 71:
        var let = "g";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 72:
        var let = "h";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 73:
        var let = "i";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 74:
        var let = "j";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 75:
        var let = "k";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 76:
        var let = "l";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 77:
        var let = "m";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 78:
        var let = "n";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 79:
        var let = "o";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 80:
        var let = "p";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 81:
        var let = "q";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 82:
        var let = "r";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 83:
        var let = "s";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 84:
        var let = "t";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 85:
        var let = "u";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 86:
        var let = "v";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 87:
        var let = "w";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 88:
        var let = "x";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 89:
        var let = "y";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 90:
        var let = "z";
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;
    }
  };

  // Write letters to guessArray with each on key event

  // Subtract 1 from guessLeft with each on key event

  // Make function to use random number generator / round down and apply to alphArray to generate compGuess

  // Create reset function to reset guessArray and guessLeft and generate compGuess

  // write if or case statements

  // if compGuess the same as userGuess, reset, add 1 to wins

  // else guessLeft = 0, reset, add 1 to losses,
});
