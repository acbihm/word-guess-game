
var letterGuess;
var chosenWord = document.getElementById("questionElement");
var solutionWord = document.getElementById("solutionElement");


var alphabetAll = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var wordBank = ["XOLOTL", "HUITZILOPOCHTLI", "QUETZALCOATL", "XOCHIQUETZAL","EHECATL", "TONANTZIN" ];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var wrongLetters = [];
var solutionWord = [];
    for (k = 0; k < chosenWord.length; k++) {
    solutionWord[k] = "_";
}
var lettersLeft = chosenWord.length;
// guessesLeft = 6;
// document.getElementById("questionWord").innerHTML = chosenWord;
document.getElementById("solutionWord").innerHTML = (solutionWord.join(" "))
document.getElementById("gameStatus").innerHTML = "Guess a letter to discover the names of Aztec gods!";
// document.getElementById("winOrLoseGuesses").innerHTML = guessesLeft;
//i tried to use this ID to show Win or Lose, but  mostly to show the # of guesses\

runGame();
function runGame () {
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
                    document.getElementById("solutionWord").innerHTML = solutionWord;
                    solutionWord[i] = letterGuess;
                    document.getElementById("gameStatus").innerHTML = "You guessed " + letterGuess;
                    lettersLeft--;
                }
                else {
                    document.getElementById("gameStatus").innerHTML = "You guessed " + letterGuess;
                    wrongLetters.push(letterGuess);
                    console.log(wrongLetters);
                    // document.getElementById("wrongLetters").innerHTML = wrongLetters;
                    // guessesLeft--;
                    //couldn't get this to work 
                }
                if (lettersLeft == 0) {
                    document.getElementById("solutionWord").innerHTML = solutionWord;
                    document.getElementById("winOrLoseGuesses").innerHTML = "Good job! The answer was " + chosenWord;
                }
                else {
                    runGame();
                }
            }
        }
    }
}  
// The game is over
