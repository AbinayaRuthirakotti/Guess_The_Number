var val=document.getElementById("guessinput");
var result=document.getElementById("result");
var randomnumber=Math.floor(Math.random()*10)+1;
var attemptsText = document.getElementById("attempts");
var circle = document.getElementById("colorCircle");
var attempts=0;
function checkguess(){
    var guess=val.value;
     if (guess < 1 || guess > 10) {
        result.textContent = "Enter a number between 1 and 10";
        circle.style.background = "yellow";
        return;
    }
    attempts++;
    attemptsText.textContent = attempts;
    if(guess==randomnumber){
        result.textContent="Congratulations! You guessed the number!";
        circle.style.background = "green";
        alert("You Win!");
    }
    else if (guess > randomnumber) {
    result.textContent = "Too High!";
    circle.style.background = "red";
} 
else {
    result.textContent = "Too Low!";
     circle.style.background = "blue";
}

     val.value = "";
}
function resetgame() {
   //randomnumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    attemptsText.textContent = 0;
    result.textContent = "";
    val.value = "";
    circle.style.background = "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)";
}
