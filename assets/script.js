var wins = 0;
var ties = 0;
var losses = 0;
// Array of options for computer to pick from
 var options = ["R", "P", "S"];

 var playGame = function () {
    // Ask user for their choice
    var userChoice = window.prompt("Draw! Enter R, P, or S:");
// If user pressed Cancel, immediatelly end function
    if (!userChoice) {
        return;
    }
    // Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();

    //Get random index form array of options
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer picked " + computerChoice);

    // If choices are the same, it's a tie
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie, cowboy!");

        //Check every win condition for the player
        
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("Hooray! You win!");

        // If above conditions failed, assume player lost
    } else {
        losses++;
        window.alert("Sorry, You lost!");
    }

    //Print stats with line breaks
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    // Ask user to play again
    var playAgain = window.confirm("Want to play again?");

    // If user pressed OK, run the function again
    if (playAgain) {
        playGame();
        
    }

 };

 // Run the game for the first time 
 playGame();