$(document).ready(function() {


	var randomNumber; 
	var userScore = 0;
	var wins=0;
	var losses=0;

	function initializeGameStart(){

	$(".crystals, #score").empty();
	
	}

		randomNumber = Math.floor(Math.random()*120)+19;
		$("#random-number").html("<p>Target Number:</p><br>" + randomNumber);

		


		$(".crystals").map(function() {

			
			$("#win-loss").html("<h2> Wins: " + wins + "</h2><br>" + "<h2> Losses: "+ losses + "</h2" );
			$("#score").html("<p>Your Score:</p>");

			//set vaLue for Crystal 1
			var crystalNumber1 = Math.floor(Math.random()*12)+1;
			$("#crystal1").attr("data-crystalvalue",crystalNumber1);

			$("#crystal1").on("click", function(){

			var crystalValue1 = ($(this).attr("data-crystalvalue"));
			crystalValue1 = parseInt(crystalValue1);

			userScore += crystalValue1;
			$("#score").html("<p>Your Score:</p>" + userScore);

			if (userScore === randomNumber){
			wins++;
			alert("Winner!")
			initializeGameStart();
			} 

			if (userScore >= randomNumber){
			losses++;
			alert("Better luck next time!");
			initializeGameStart();
			}	
			
			});	
			
			//set value for Crystal 2
			var crystalNumber2 = Math.floor(Math.random()*12)+1;
			$("#crystal2").attr("data-crystalvalue",crystalNumber2);	

			$("#crystal2").on("click", function(){
			var crystalValue2 = ($(this).attr("data-crystalvalue"));
			crystalValue2 = parseInt(crystalValue2);

			userScore += crystalValue2;
			$("#score").html("<p>Your Score:</p>" + userScore);

			if (userScore === randomNumber){
			wins++;
			alert("Winner");
			initializeGameStart();
			} 

			if (userScore >= randomNumber){
			losses++;
			alert("Better luck next time!");
			initializeGameStart();
			}	
			

			});	

			var crystalNumber3 = Math.floor(Math.random()*12)+1;
			$("#crystal3").attr("data-crystalvalue",crystalNumber3);	

			$("#crystal3").on("click", function(){
			var crystalValue3 = ($(this).attr("data-crystalvalue"));
			crystalValue3 = parseInt(crystalValue3);

			userScore += crystalValue3;
			$("#score").html("<p>Your Score:</p>" + userScore);

			if (userScore === randomNumber){
			wins++;
			alert("Winner!!!");
			initializeGameStart();
			} 

			if (userScore >= randomNumber){
			losses++;
			alert("Better luck next time!");
			initializeGameStart();
			}	

			});		

			//set value for crystal 4
			var crystalNumber4 = Math.floor(Math.random()*12)+1;
			$("#crystal4").attr("data-crystalvalue",crystalNumber4);	

			$("#crystal4").on("click", function(){
			var crystalValue4 = ($(this).attr("data-crystalvalue"));
			crystalValue4 = parseInt(crystalValue4);

			userScore += crystalValue4;
			$("#score").html("<p>Your Score:</p>" + userScore);

			if (userScore === randomNumber){
			wins++;
			alert("Winner!!!");
			initializeGameStart();
			} 

			if (userScore >= randomNumber){
			losses++;
			alert("Better luck next time!");
			initializeGameStart();
			}	
			});	

			if (userScore === randomNumber){
			wins++;
			alert("Winner!!!");
			initializeGameStart();
			} 

			if (userScore >= randomNumber){
			losses++;
			console.log("Better luck next time!");
			initializeGameStart();
			}	

    	});

});