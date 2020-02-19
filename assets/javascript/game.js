// When document ready
function reset() {
  guessLeft = 9;
  guessArray = [];
  $("#guess-array").empty();
  compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
}

$(document).ready(function() {
  // Declare variables

  var winTot = 0;
  var lossTot = 0;
  var guessLeft = 9;
  var guessArray = [];
  var alphaArray = [
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

  // Make function to use random number generator / round down and apply to alphArray to generate compGuess
  // from class notes: Math.floor(Math.random() * array.lenth)

  compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
  console.log(compGuess);

  // Create reset function to reset guessArray and guessLeft and generate compGuess
  // function reset() {
  // guessLeft = 9;
  // guessArray = [];
  // $("#guess-array").empty();
  // compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
  // }

  // Create on key events for all letters and store in userGuess

  // Refer to https://codegazerants.com/2015/09/12/javascript-catch-keystrokes/
  // Use https://keycode.info to know what ID goes with what keystroke
  // notice letter keys go from 65-90

  // Write letters to guessArray with each on key event

  // Subtract 1 from guessLeft with each on key event

  document.onkeydown = function(userGuess) {
    switch (userGuess.keyCode) {
      case 65:
        var let = "a";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 66:
        var let = "b";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 67:
        var let = "c";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 68:
        var let = "d";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 69:
        var let = "e";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 70:
        var let = "f";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 71:
        var let = "g";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 72:
        var let = "h";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 73:
        var let = "i";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 74:
        var let = "j";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 75:
        var let = "k";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 76:
        var let = "l";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 77:
        var let = "m";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 78:
        var let = "n";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 79:
        var let = "o";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 80:
        var let = "p";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 81:
        var let = "q";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 82:
        var let = "r";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 83:
        var let = "s";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 84:
        var let = "t";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 85:
        var let = "u";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 86:
        var let = "v";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 87:
        var let = "w";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 88:
        var let = "x";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 89:
        var let = "y";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      case 90:
        var let = "z";
        userGuess = let;
        guessArray.push(let);
        console.log(guessArray);
        $("#guess-array").append("<p>" + let + "</p>");
        guessLeft--;
        $("#guess-left").text("Guesses Left: " + guessLeft);
        break;

      default:
        return;
    }

    // if compGuess the same as userGuess, reset, add 1 to wins, write to html

    if (compGuess === userGuess) {
      winTot++;
      $("#wins").text("Wins: " + winTot);
      guessLeft = 9;
      $("#guess-left").text("Guesses Left: " + guessLeft);
      guessArray = [];
      $("#guess-array").empty();
      compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
      console.log(compGuess);
    }

    // if guessLeft = 0, reset, add 1 to losses, write to html

    if (guessLeft === 0) {
      lossTot++;
      $("#losses").text("Losses: " + lossTot);
      guessLeft = 9;
      $("#guess-left").text("Guesses Left: " + guessLeft);
      guessArray = [];
      $("#guess-array").empty();
      compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)];
      console.log(compGuess);
    }
  };
});
