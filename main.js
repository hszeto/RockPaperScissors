document.getElementById("rock").addEventListener('click', function(){
	//console.log(compare("rock",cpu_choice() ));
	document.getElementById("result").innerHTML = compare("rock",cpu_choice() ) + " Computer picked " + computerResponse;
});
document.getElementById("paper").addEventListener('click', function(){
	//console.log(compare("paper",cpu_choice() ));
	document.getElementById("result").innerHTML = compare("paper",cpu_choice() ) + " Computer picked " + computerResponse;
});
document.getElementById("scissors").addEventListener('click', function(){
	//console.log(compare("scissors",cpu_choice() ));
	document.getElementById("result").innerHTML = compare("scissors",cpu_choice() ) + " Computer picked " + computerResponse;
});

	
function cpu_choice(){
	computerChoice = Math.random();
   if (computerChoice < 0.34) {
	   computerResponse = "rock";
   } else if(computerChoice <= 0.67) {
	   computerResponse = "paper";
   } else {
	   computerResponse = "scissors";
   } 
   return computerResponse;
}
 
function compare(choice1, choice2){
    if(choice1 === choice2){
     return "Tie Tie Tie!"   
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "U good. Rock wins."
        }
        else{
            return "U suck. Paper wins."
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "U good. Paper wins."
        }
        else{
            return "U suck. Scissors wins."
        }
    }
    else if(choice1 === "scissors"){
        if(choice2 === "paper"){
            return "U good. Scissors wins."
        }
        else{
            return "U suck. Rock wins."
        }
    }
}
