var letterGuess;
var chosenWord = document.getElementById("questionElement");
var solutionWord = document.getElementById("solutionElement");


var alphabetAll = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var wordBank = ["MACHOKE", "POLIWAG", "PIKACHU", "MANKEY","EKANS", "TAUROS", "RHYDON", "HYPNO" ];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var guessedLetters = [];
var solutionWord = [];
    for (k = 0; k < chosenWord.length; k++) {
    solutionWord[k] = "_";
}
var testWin;
var letterWasWrong;
var lettersLeft = chosenWord.length;
var guessesLeft = 6;
document.getElementById("questionWord").innerHTML = chosenWord;
document.getElementById("solutionWord").innerHTML = (solutionWord.join(" "))
document.getElementById("gameStatus").innerHTML = "Guess the Pokemon!";
document.getElementById("guessesLeft").innerHTML = guessesLeft;
//i tried to use this ID to show Win or Lose, but  mostly to show the # of guesses\
testWin = function() {
    if (lettersLeft <= 1) {
        document.getElementById("solutionWord").innerHTML = solutionWord;
        document.getElementById("winOrLose").innerHTML = "Good job! The answer was " + chosenWord;
    }
}
testLose = function() {
    if (guessesLeft <= 1) {
        document.getElementById("solutionWord").innerHTML = solutionWord;
        document.getElementById("winOrLose").innerHTML = "Oh no! You ran out of guesses! The answer was " + chosenWord;
    }
}
    if (lettersLeft > 0) {
        document.onkeyup = function(event) {
            letterGuess = event.key;
            letterGuess = letterGuess.toUpperCase();
            if (alphabetAll.includes(letterGuess)) {
                console.log(letterGuess);
            }
            else {
                alert("Please enter a letter to play!");
            }
            for (i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === letterGuess) {
                    solutionWord[i] = letterGuess;
                    guessedLetters.push(letterGuess);
                    document.getElementById("solutionWord").innerHTML = solutionWord
                    document.getElementById("gameStatus").innerHTML = "You CORRECTLY guessed " + letterGuess;
                    document.getElementById("guessedLetters").innerHTML = guessedLetters;
                    letterWasWrong = false;
                    break;
                }
                else {
                    letterWasWrong = true;
                }
            }
            testWin();
            testLose();
            if (letterWasWrong === true){ 
                document.getElementById("gameStatus").innerHTML = "You INCORRECTLY guessed " + letterGuess;
                guessedLetters.push(letterGuess);
                console.log(guessedLetters);
                document.getElementById("guessedLetters").innerHTML = guessedLetters;
                guessesLeft--;
                
            }
            else 
                for (i = 0; i < chosenWord.length; i++) {
                    if (guessedLetters.includes(chosenWord[i])) {
                        break;
                    }
                    else {
                        lettersLeft--;
                        break;
                    }
                }
                // alert(lettersLeft);
                console.log("letters left" +lettersLeft);
                console.log("guessess left" +guessesLeft);
            }
        }
// The game is over
