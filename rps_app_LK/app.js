/*
 Author: Lisa Kitto
 TTS Assn: 1
 */

var player1 = {name: '', wins: 0}, player2 = {name: 'Computer', wins: 0};

const weapons = ['rock', 'paper', 'scissors'];

const points = function (choice1, choice2) {

    var results = player1.name + ": " + weapons[choice1] + " vs " + player2.name + ": " + weapons[choice2] + ". ";

    if (choice1 === choice2) {
        alert(results + "It's a tie!");
    }
    else if (choice1 > choice2 && (choice1 != 0 && choice2 != 2)) {
        player1.wins++;
        alert(results + player1.name + " wins!");
        if (player1.wins === 3) {
            alert(player1.name + " wins the match");
            play = false;
        }
    } else {
        player2.wins++;
        alert(results + player2.name + " wins!")
        if (player2.wins === 3) {
            alert(player2.name + " wins the match!");
            play = false;
        }
    }
}

var play = confirm("Want to play rock, paper, scissiors?");

if (play) {
    player1.name = prompt("Enter player one's name.");
}

while (play) {
    var choice1 = parseInt(prompt(player1.name + ", enter 0 for Rock, 1 for Pamper, 2 for Scissors"));
    if(choice1 <0 || choice1 > 2){
        alert("Please pick a valid selection");
        continue;
    }
    var choice2 = parseInt(Math.random() * weapons.length) % 3;
    points(choice1, choice2);
};
