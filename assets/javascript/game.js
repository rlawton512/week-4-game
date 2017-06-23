	
	// var crystalValue = 0;
	var crystalValue1;
	var crystalValue2;
	var crystalValue3;
	var crystalValue4;
	var userScore = 0;
	var wins=0;
	var losses=0;
	

// function initializeGameStart(){

// 	valueCrystal1 = "";
// 	valueCrystal1 = "";
// 	valueCrystal3 = "";
// 	valueCrystal4 = "";

// 	$("#crystal1, #crystal2, #crystal3, #crystal4").empty();
// }

var randomNumber = Math.floor(Math.random()*120)+19;
$("#random-number").html("<p>Target Number:</p><br>"+ randomNumber);
// $("#random-number").html(randomNumber);


function reset () {
	userScore = 0;
	randomNumber = Math.floor(Math.random()*120)+19;
	crystalImageValues1();
	crystalImageValues2();
	crystalImageValues3();
	crystalImageValues4();
}

// chooseRandomNumber
// var randomNumberBetween19and120 = Math.floor(Math.random()*120)+19;
// $("#random-number").html(randomNumberBetween19and120);

//assign crystal 1 value 


// function crystalImageValues1 (){
	var crystalNumberOptions1 = Math.floor(Math.random()*12)+1;
	$("#crystal1").attr("data-crystalvalue",crystalNumberOptions1);

	$("#crystal1").on("click", function(){
		var crystalValue1 = ($(this).attr("data-crystalvalue"));
		crystalValue1 = parseInt(crystalValue1);

		userScore += crystalValue1;
		$("#score").text(userScore);
	});	
	
// };

// crystalImageValues1();
	

//assign crystal 2 value
// function crystalImageValues2 (){
	var crystalNumberOptions2 = Math.floor(Math.random()*12)+1;
	$("#crystal2").attr("data-crystalvalue",crystalNumberOptions2);	

	$("#crystal2").on("click", function(){
		var crystalValue2 = ($(this).attr("data-crystalvalue"));
		crystalValue2 = parseInt(crystalValue2);

		userScore += crystalValue2;
		$("#score").text(userScore);
	});

	
// };

// crystalImageValues2();


//assign crystal 3 value
// function crystalImageValues3 (){
	var crystalNumberOptions3 = Math.floor(Math.random()*12)+1;
	$("#crystal3").attr("data-crystalvalue",crystalNumberOptions3);	

	$("#crystal3").on("click", function(){
		var crystalValue3 = ($(this).attr("data-crystalvalue"));
		crystalValue3 = parseInt(crystalValue3);

		userScore += crystalValue3;
		$("#score").text(userScore);
	});
	
// };

// crystalImageValues3();



//assign crystal 4 value 
// function crystalImageValues4 (){
	var crystalNumberOptions4 = Math.floor(Math.random()*12)+1;
	$("#crystal4").attr("data-crystalvalue",crystalNumberOptions4);	

	$("#crystal4").on("click", function(){
		var crystalValue4 = ($(this).attr("data-crystalvalue"));
		crystalValue4 = parseInt(crystalValue4);

		userScore += crystalValue4;
		$("#score").text(userScore);
	});
	
// };

// crystalImageValues4();
$("#win-loss").html("<h2> Wins: " + wins + "</h2><br>" + "<h2> Losses: "+ losses + "</h2" );
$("#score").html("<p>Your Score:</p>");

if (userScore === randomNumber){
	console.log("Winner!!!");
	wins++;
	$("#win-loss").html("<h2> Wins: " + wins + "</h2>");
	reset();
} 

if (userScore >= randomNumber){
	console.log("Better luck next time!");
	losses++;
	$("#win-loss").html("<h2> Losses: "+ losses + "</h2");
	reset();

}





