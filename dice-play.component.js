
var images = [],
indx = 0;
let curVal = null;
let prevVal = null;
let holdVal = [0,0];
let holdItem = null;
var activeP = 1;
var disableButton = false;

images[0] = "images/dice-1.png";
images[1] = "images/dice-2.png";
images[2] = "images/dice-3.png";
images[3] = "images/dice-4.png";
images[4] = "images/dice-5.png";
images[5] = "images/dice-6.png";


function roleDice() {
    if (disableButton === true) {
        document.getElementById('roleDice').disabled = true;
    }
    img = document.getElementById('diceInstance')
    indx = (parseInt)(Math.random() * 6);
    img.src = images[indx];
    
    curVal = indx + 1;
    if (curVal != 1 && holdVal[activeP] <= 49) {
        var curVal = prevVal != null ? (prevVal + curVal) : curVal;
        document.getElementById("player" + activeP + "Current").innerHTML = 'Current is <br>' + curVal;
        prevVal = curVal;      
    } else if (holdVal[activeP] >= 50) {
        document.getElementById('player' + activeP + 'Score').innerHTML = "Player " + activeP + " won the game!!";
        disableButton = true;
    } else {
        curVal = prevVal = holdItem = 0;
        document.getElementById("player" + activeP + "Current").innerHTML = 'Current is <br>' + curVal;
//        document.getElementById('player' + activeP + 'Score').innerHTML = prevVal;
        activeP = activeP === 1 ? 2 : 1;
    }
}

function holdDice() {
    if (disableButton === true) {
        document.getElementById('roleDice').disabled = true;
    }
    holdItem = holdItem ? holdItem + prevVal : prevVal;
    holdVal[activeP] = holdItem;
    document.getElementById('player' + activeP + 'Score').innerHTML = holdItem; 
    curVal = 0;
    prevVal = 0;
    document.getElementById("player" + activeP + "Current").innerHTML = 'Current is <br>' + curVal;
}

function startNewGame() {
    disableButton = false;
    if (disableButton === false) {
        document.getElementById('roleDice').disabled = false;
        document.getElementsByClassName('hold-dice')[0].disabled = false;
    }
    curVal = 0;
    prevVal = 0;
    holdItem =0;
    holdVal = [0,0];
    document.getElementById('player' + activeP + 'Score').innerHTML = '';
    document.getElementById("player1Current").innerHTML = 'Current is <br>' + 0;
    document.getElementById("player2Current").innerHTML = 'Current is <br>' + 0;
    document.getElementById('player1Score').innerHTML = 0;
    document.getElementById('player2Score').innerHTML = 0;
}

