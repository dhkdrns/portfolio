var userWins = "You win!";
var computerWins = "The computer wins!";
var roundCounter = 0;

var gameRound = function(){
    var userChoice = prompt("Choose Rock, Paper, Scissors, Lizard or Spock by typing 'R', 'P', 'S', 'L' or 'SP'");
    var computerChoice = "R";
    var rng = Math.random();

    if(rng > 0.8) {
        computerChoice = "P";
    } else if (rng > 0.6) {
        computerChoice = "S";
    } else if (rng > 0.4) {
        computerChoice = "L";
    } else (rng > 0.2) {
        computerChoice = "SP";
    }

    if(computerChoice !== userChoice){
        if(computerChoice === "R"){
            if (userChoice === "S") {
                alert(computerWins);
            } else if (userChoice === "L"){
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
        else if (computerChoice === "P"){
            if (userChoice === "R") {
                alert(computerWins);
            } else if (userChoice === "SP"){
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
        else if (computerChoice === "S"){
            if (userChoice === "P") {
                alert(computerWins);
            } else if (userChoice === "L"){
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
        else if(computerChoice === "L"){
            if (userChoice === "SP") {
                alert(computerWins);
            } else if (userChoice === "P"){
                alert(computerWins);
            } else {
                alert(userWins);
            }
        }
        else if(computerChoice === "SP"){
            if (userChoice === "R") {
                alert(computerWins);
            } else if (userChoice === "S"){
                alert(computerWins);
            } else {
                alert(userWins);
            }


        }
    } else {
        alert('Tie!');
    }
};

while (roundCounter < 5) {
    gameRound();
    roundCounter++;
}
