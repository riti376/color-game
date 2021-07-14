let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector(".easyBtn");
let hardButton = document.querySelector(".hardBtn");
let displayScore = document.querySelector("#displayScore");
let count = document.querySelector("#count");
let colorScore = 0;
let scoreDisplay = 0;
var gameOver = false;




easyButton.addEventListener("click" , function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
    h1.style.background = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    displayreset();
	gameOver = false;


})

hardButton.addEventListener("click" , function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
        h1.style.background = "steelblue";
        resetButton.textContent = "New Colors";
	    messageDisplay.textContent = "";
        displayreset();


})
function reset(){
    colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    displayreset();
	gameOver = false;

   for(var i = 0; i < squares.length; i++){
   squares[i].style.background = colors[i];
	}	h1.style.background = "steelblue";

}
resetButton.addEventListener("click", function(){
reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){ 
                resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				scoreAdd();
	
			}
			else {
				this.style.background = "#232323";
				scoreSub();
			}
});
}
function scoreAdd(){
	if(!gameOver){
	    colorScore+=numSquares*100;
		scoreDisplay+=numSquares*100;
		count.textContent = colorScore;
        displayScore.textContent = "(" + "You scored " + scoreDisplay + " out of " + numSquares*100 + ":"+")";
	   messageDisplay.textContent = "Correct!!"}
	   gameOver=true;
	}
function scoreSub(){
		colorScore-=100;
        scoreDisplay-=100;
        displayScore.textContent = ":"+"(" + " You lost " + Math.abs(scoreDisplay) + " points" + ")";
        messageDisplay.textContent = "Try again"
	}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function displayreset(){
	scoreDisplay = 0;
	displayScore.textContent = "";
}
function scorereset(){
    colorscore = 0;
    count.textContent = 0;
}

    

    

