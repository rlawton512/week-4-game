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

var randomNumberBetween19and120 = Math.floor(Math.random()*121)+19;
$("#random-number").html(randomNumberBetween19and120);


//assign crystal 1 value 
var crystalNumberOptions1 = Math.floor(Math.random()*13)+1;

function crystalImageValues1 (){

	$("#crystal1").attr("data-crystalvalue",crystalNumberOptions1);	
	
};

crystalImageValues1();

$("#crystal1").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	userScore += crystalValue;
	console.log(userScore);
});

//assign crystal 2 value
var crystalNumberOptions2 = Math.floor(Math.random()*13)+1;
function crystalImageValues2 (){

	$("#crystal2").attr("data-crystalvalue",crystalNumberOptions2);	
	
};

crystalImageValues2();

$("#crystal2").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	userScore += crystalValue;
	console.log(userScore);
});

//assign crystal 3 value
var crystalNumberOptions3 = Math.floor(Math.random()*13)+1;
function crystalImageValues3 (){

	$("#crystal3").attr("data-crystalvalue",crystalNumberOptions3);	
	
};

crystalImageValues3();

$("#crystal3").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	userScore += crystalValue;
	console.log(userScore);
});

//assign crystal 4 value 
var crystalNumberOptions4 = Math.floor(Math.random()*13)+1;
function crystalImageValues4 (){

	$("#crystal4").attr("data-crystalvalue",crystalNumberOptions4);	
	
};

crystalImageValues4();

$("#crystal4").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	userScore += crystalValue;
	console.log(userScore);
});

