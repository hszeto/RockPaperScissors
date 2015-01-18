// Listen to player's click and then fire the function which corresponse to the input
document.getElementById("rock").addEventListener('click', function(){
	document.getElementById("result").innerHTML = compare("rock",cpu_choice() ) + " Computer picked " + computerResponse;
});
document.getElementById("paper").addEventListener('click', function(){
	document.getElementById("result").innerHTML = compare("paper",cpu_choice() ) + " Computer picked " + computerResponse;
});
document.getElementById("scissors").addEventListener('click', function(){
	document.getElementById("result").innerHTML = compare("scissors",cpu_choice() ) + " Computer picked " + computerResponse;
});

// Computer's random pick. 0-0.33=rock. 0.34-0.66=paper. 0.67-1=scissors.
function cpu_choice(){
	computerChoice = Math.random();
   if (computerChoice < 0.34) {
	   computerResponse = "rock";
   } else if(computerChoice <= 0.67) {
	   computerResponse = "paper";
   } else {
	   computerResponse = "scissors";
   } 
   return computerResponse;     // return computerResponse for this function
}
 
// Logic to compare player's and computer's choices
function compare(choice1, choice2){
    if(choice1 === choice2){
     return "Tie Tie Tie!"   
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "U good. Rock wins."
        }
        else{
            return "U lose. Paper wins."
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "U good. Paper wins."
        }
        else{
            return "U lose. Scissors wins."
        }
    }
    else if(choice1 === "scissors"){
        if(choice2 === "paper"){
            return "U good. Scissors wins."
        }
        else{
            return "U lose. Rock wins."
        }
    }
}
