$(document).ready(function() {


	var randomNumber;
	var crystalValue; 
	var userScore = 0;
	var wins=0;
	var losses=0;

	function initializeGameStart(){
		//set userScore back to 0 and puts score on the page
		userScore = 0;
		$("#score").html("<p>Your Score:</p>" + userScore);

		//display wins & losses 
		$("#win-loss").html("<h2> Wins: " + wins + "</h2><br>" + "<h2> Losses: "+ losses + "</h2" );
	
		//set randon number as target number for the game 
		randomNumber = Math.floor(Math.random()*120)+19;

		//display random number on the page
		$("#random-number").html("<p>Target Number:</p><br>" + randomNumber);

		// $("crystalValue").empty();

		//call the function to click on crystals and tally score 
		buildCrystals();
	
	}

		
	//function to display the score 
	function setScore (){
		if (userScore == randomNumber){
			wins++;
			initializeGameStart();
		
		} else if (userScore > randomNumber){
			losses++;
			initializeGameStart();
		}	
	}	

		

	//build crystal values 
	function buildCrystals () {
		for (i=0; i<4; i++){
			//set crystal value to random number
			crystalValue = Math.floor(Math.random()*12)+1;
			//assign crystal value to our first crystal 
			$("#crystal"+(i+1)).attr("data-crystalvalue",crystalValue);
			$("#crystal"+(i+1)).on("click",function(){

				crystalValue = ($(this).attr("data-crystalvalue"));
				crystalValue = parseInt(crystalValue);

				userScore += crystalValue;
				$("#score").html("<p>Your Score:</p>" + userScore);
				setScore();
			})
		}		
	}
	
	initializeGameStart ();

})

			
			