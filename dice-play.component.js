
var images = [],
indx = 0;
let curVal = null;
let prevVal = null;
var activeP = 1;

images[0] = "images/dice-1.png";
images[1] = "images/dice-2.png";
images[2] = "images/dice-3.png";
images[3] = "images/dice-4.png";
images[4] = "images/dice-5.png";
images[5] = "images/dice-6.png";


function roleDice() {
    console.log('we are under role dice....');
    img = document.getElementById('diceInstance')
    indx = (parseInt)(Math.random() * 6);
    img.src = images[indx];
    
    curVal = indx + 1;
    if (curVal != 1) {
        var curVal = prevVal != null ? (prevVal + curVal) : curVal;
        document.getElementById("player" + activeP + "Current").innerHTML = 'Current is <br>' + curVal;
        prevVal = curVal;
    } else {
        cauVal = 0;
        prevVal = 0;
        document.getElementById("player" + activeP + "Current").innerHTML = 'Current is <br>' + curVal;
        activeP = activeP === 1 ? 2 : 1;
    }
}

function holdDice() {
    document.getElementById('player' + activeP + 'Score').innerHTML = prevVal;
    
}

function startNewGame() {
    document.getElementById("player1Current").innerHTML = 'Current is <br>' + 0;
    document.getElementById("player2Current").innerHTML = 'Current is <br>' + 0;
    document.getElementById('player1Score').innerHTML = 0;
    document.getElementById('player2Score').innerHTML = 0;
}

