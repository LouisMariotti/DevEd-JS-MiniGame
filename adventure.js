/* Simple guessing game, we are going to guess what nuber is the computer
thinking of so the first step will be make the computer generate a 
random number, let the user the abillity to guess, if they guess and
they are wrong then ask them againg (hint), if they win say thaht they 
won*/

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11); // Math.random to generate a random number and Math.floor to delete decimals, need to multiple by 11 to reach up to 10
  let guess; // guessing variable

  // Start our Do While loop

  do {
    guess = prompt("Guess a number between 1-10"); // Ask for a guess
    console.log(guess); // display the number they tried to guess
    if (randomNr > guess) {
      // condition to display the message
      console.log("You guessed too low"); // message if guess to low
    } else if (randomNr < guess) {
      // condition to display the message
      console.log("You guessed too high"); // message if guess too high
    }
  } while (guess != randomNr); // end of our loop
  console.log("You Won"); // if good guess then display You Won message
}

guessGame();
