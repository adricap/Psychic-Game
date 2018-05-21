var alphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase();

var userArray = [];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var computerGuess = computerGuess;

// Randomly chooses a choice from the options array. This is the Computer's guess.

computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; {
    console.log(computerGuess);
}
function computerChoices(){
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; {
        console.log(computerGuess); 
    }

    return computerGuess;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (userArray.indexOf(userGuess) >=0) {
    }
    else {
        userArray.push(userGuess);
        document.getElementById('userGuess').innerHTML = userArray;
        console.log(userArray);
    }

    if (userGuess === computerGuess) {
      wins++;
      guessLeft = 9;
      userArray = [];

    }

    computerChoices()
    if (userGuess !== computerGuess) {
        guessLeft --;
    }

    if (guessLeft==0) {
        losses++;
        guessLeft = 9;
        userArray = [];
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = guessLeft;
};


