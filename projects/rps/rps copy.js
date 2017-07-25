var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
var res = userChoice.toUpperCase();

var rng = Math.random();
var computerChoice = "R";

if(rng > 0.66) {
    computerChoice = "P";
} else if (rng > 0.33) {
    computerChoice = "S";
}

var userWins = "You win!";
var computerWins = "The computer wins!";

if(computerChoice !== res){
    if(computerChoice === "R"){
        if (res === "S") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    } else if (computerChoice === "P") {
        if( res === "R") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    } else {
        if( res === "P") {
            alert(computerWins);
        } else {
            alert(userWins);
        }
    }
} else {
    alert('Tie!');
}
